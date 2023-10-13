"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { differenceInSeconds } from "date-fns";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import BlankAnswerInput from "./BlankAnswerInput";
import OpenEndedPercentage from "./OpenEndedPercentage";
import stringSimilarity from "string-similarity";
import { BarChart, ChevronRight, Timer } from "lucide-react";
import { useSearchParams, useRouter } from 'next/navigation';
import { cn, formatTimeDelta } from "@/lib/utils";
import { dbPool } from "@/lib/db/index";
import { question} from "@/lib/db/schema";
import { eq } from "drizzle-orm";
type Props = {
  userId: string;
};

const OpenEnded = ({userId}: Props) => {
  const [hasEnded, setHasEnded] = useState(false);
  const [now, setNow] = useState(new Date());
  const query = useSearchParams();
  const generatedQuestions = query.get("generatedQuestions");
  const [timeStarted, setTimeStarted] = useState(new Date());
  const [timeEnded, setTimeEnded] = useState(0);
  const [numberofQ, setNumberOfQ] = useState(0);
  const [blankAnswer, setBlankAnswer] = React.useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [percentageCorrect, setPercentageCorrect] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const router = useRouter();
  const questions = generatedQuestions ? JSON.parse(generatedQuestions) : [];
  const currentQuestion = questions?.[questionIndex] || null;

  useEffect(() => {
    if (!hasEnded) {
      const interval = setInterval(() => {
        setNow(new Date());
        setStartedAt(new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
    } else {
      const totalQuestions = questions.length;
      const correctQuestions = 0; // Initialize it to 0, as the user hasn't answered any questions yet
      const initialPercentageCorrect = (correctQuestions / totalQuestions) * 100;
      setPercentageCorrect(initialPercentageCorrect);
    }
  }, [hasEnded, questions.length]);

  // ... (previous imports and code)

  const handleNext = () => {
    if (questionIndex === questions.length) {
      setHasEnded(true);
      onSubmit()
    } else {
      let filledAnswer = blankAnswer;
      document.querySelectorAll("#user-blank-input").forEach((input) => {
        const inputElement = input as HTMLInputElement; // Cast to HTMLInputElement
        filledAnswer = filledAnswer.replace("_____", inputElement.value);
        inputElement.value = "";
      });
      const correctAnswer = currentQuestion?.answer;
      const isCorrect = correctAnswer.toLowerCase().includes(filledAnswer.toLowerCase());
      console.log(isCorrect);
      console.log(filledAnswer);
      if (isCorrect) {
        let percentageSimilar = stringSimilarity.compareTwoStrings(
          currentQuestion.answer.toLowerCase().trim(),
          filledAnswer.toLowerCase().trim()
        );
        percentageSimilar = Math.round(percentageSimilar * 100);
        setPercentageCorrect((prevPercentage) => Math.round(prevPercentage + (1 / questions.length) * 100));

      }
  
      setQuestionIndex((prev) => prev + 1);
    }
  };
  if (hasEnded) {
    return (
      <div className="absolute flex flex-col justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="px-4 py-2 mt-2 font-semibold text-white bg-green-500 rounded-md whitespace-nowrap">
          You Completed in{" "}
          {formatTimeDelta(differenceInSeconds(timeStarted, now))}
        </div>
        <Link 
          href={{
            pathname: '/statistics',
            query: {
              prop1: percentageCorrect,
              prop2: numberofQ,
              prop3: timeEnded,
              props4: startedAt, // Pass startedAt as a query parameter
            }
          }}
          className={cn(buttonVariants({ size: "lg" }), "mt-2")}
        >
          View Statistics
          <BarChart className="w-4 h-4 ml-2" />
        </Link>
      </div>
    );
  }
  const onSubmit = async () => {
    // Your asynchronous code here
    for (let i = 0; i < questions.length; i++) {
      const userAnswer = currentQuestion[i].answer;

      // Format timeStarted and now as strings in the ISO 8601 format
      const formattedTimeStarted = timeStarted;
      const formattedNow = now;
    await dbPool
    .insert(question)
    .values({
      userId: userId,
      topic: currentQuestion[i].topic,
      question: currentQuestion[i].question,
      answer: currentQuestion[i].answer,
      timeStarted: formattedTimeStarted,
      timeEnded: formattedNow,
      userAnswer: userAnswer.toString(), // Convert to string
      score: (userAnswer === questions[i].answer ? 1 : 0).toString(), 
      questionType: "open_ended"
    
      // Convert to string
    });
    setHasEnded(true)
  }
}
// ... (rest of the code remains the same)


return (
  <div className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2">
    <div className="flex flex-row justify-between">
      {currentQuestion && (
        <div className="flex flex-col">
          <p>
            <span className="text-slate-400">Topic</span> &nbsp;
            <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
              {currentQuestion.topic}
            </span>
          </p>
          <div className="flex self-start mt-3 text-slate-400">
            <Timer className="mr-2" />
            {formatTimeDelta(differenceInSeconds(timeStarted, now))}
          </div>
        </div>
      )}
      <OpenEndedPercentage percentage={percentageCorrect} />
    </div>
    <Card className="w-full mt-4">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="mr-5 text-center divide-y divide-zinc-600/50">
          <div>{questionIndex + 1}</div>
          <div className="text-base text-slate-400">
            {questions && questions.questions ? questions.questions.length : 0}
          </div>
        </CardTitle>

        <CardDescription className="flex-grow text-lg">
          {currentQuestion?.question}
        </CardDescription>
      </CardHeader>
    </Card>
    <div className="flex flex-col items-center justify-center w-full mt-4">
      {questionIndex === questions.length  ? (
        
        <Button
          variant="outline"
          className="mt-4"
          onClick={onSubmit}
        >
          Submit <BarChart className="w-4 h-4 ml-2" />
        </Button>
      ) : (
        <>
          <BlankAnswerInput answer={currentQuestion?.answer} setBlankAnswer={setBlankAnswer} />
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              handleNext();
            }}
          >
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </>
      )}
    </div>
  </div>
);
          }
export default OpenEnded;

