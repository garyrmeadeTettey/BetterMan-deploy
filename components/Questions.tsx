'use client'
// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import MCQCounter from "./MCQCounter";
import { BarChart, Timer } from "lucide-react";
import { differenceInSeconds, differenceInMinutes } from "date-fns";
import { dbPool } from "@/lib/db/index"; 
import { cn, formatTimeDelta } from "@/lib/utils";
// // Import your database connection
import { question} from "@/lib/db/schema"; // Assuming this is where you have your question model defined
type Props = {userId: string};

type Question = {
  question: string;
  answer: string;
  topic: string;
  // Add any other properties you need for a question
};

// Define a type for the array of questions
type QuestionsArray = Question[];

// Define a type for user answers
type UserAnswers = string[];

type userId = string;
// Define a type for timeStarted and now
type Timestamp = Date;
export async function Save(questions: QuestionsArray, userAnswers: UserAnswers, timeStarted: Timestamp, now: Timestamp, userId: userId) {
  try {
    for (let i = 0; i < questions.length; i++) {
      const userAnswer = userAnswers[i] || "";

      // Format timeStarted and now as strings in the ISO 8601 format
      const formattedTimeStarted = timeStarted;
      const formattedNow = now;

      await dbPool
        .insert(question)
        .values({
          userId: userId,
          topic: questions[i].topic,
          question: questions[i].question,
          answer: questions[i].answer,
          timeStarted: formattedTimeStarted,
          timeEnded: formattedNow,
          userAnswer: userAnswer.toString(), // Convert to string
          score: (userAnswer === questions[i].answer ? 1 : 0).toString(), 
          questionType: "mcq"
          // Convert to string
        });
        
    }
  } catch (error) {
    alert(error);
    // You can log the error or handle it in another way
  }
}


const QuizResults = ({ userId }: Props) => {
  const router = useRouter();
  const query = useSearchParams();
  const generatedQuestions = query.get("generatedQuestions");
  const generatedAnswers = query.get("generatedAnswers");
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = React.useState({
    correct_answers: 0,
    wrong_answers: 0,
  });
  const [hasEnded, setHasEnded] = React.useState(false);
  const [numberofQ, setNumberOfQ] = useState(0);
  const [now, setNow] = React.useState(new Date());
  const [timeStarted, setTimeStarted] = useState(new Date());
  const [timeEnded, setTimeEnded] = useState(0);
  const questions = JSON.parse(generatedQuestions);
  const answers = JSON.parse(generatedAnswers);
  

  // Initialize startedAt as a state variable
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    setTimeStarted(new Date());
    // Update startedAt when the quiz starts
    setStartedAt(new Date().getTime());
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!hasEnded) {
        setNow(new Date());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [hasEnded]);

  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleSelectAnswer = (index, selectedOption) => {
    if (!submitted) {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[index] = selectedOption;
      setUserAnswers(newUserAnswers);
    }
  };

  

  useEffect(() => {
    // Calculate and set the total number of questions (correct + wrong) after submission
    if (submitted) {
      setNumberOfQ(stats.correct_answers + stats.wrong_answers);
    }
  }, [submitted, stats.correct_answers, stats.wrong_answers]);

  const calculateScore = async () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
  
    // Calculate correct and incorrect answers
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].answer) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    }
  
    setStats({
      correct_answers: correctAnswers,
      wrong_answers: incorrectAnswers,
    });
  
    // Save the quiz results to the database
    await Save(questions, userAnswers, timeStarted, now, userId);
  };
  const handleSubmit = () => {
    if (!submitted) {
      // Check if any questions are unanswered
      if (userAnswers.some((answer) => !answer)) {
        alert("Please answer all questions before submitting.");
        return;
      }

      calculateScore();
      setSubmitted(true);
      const timeDifferenceInMinutes = differenceInMinutes(now, timeStarted);
      setTimeEnded(timeDifferenceInMinutes);
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
              prop1: stats.correct_answers,
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
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full max-w-screen-md p-6 mx-auto bg-white rounded-lg shadow-lg">
      {questions.length > 0 && (
          <p>
            <span className="text-slate-400">Topic</span> &nbsp;
            <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
              {questions[0].topic}
            </span>
          </p>
        )}
        <div className="flex self-start mt-3 text-slate-400">
          <Timer className="mr-2" />
          {formatTimeDelta(differenceInSeconds(timeStarted, now))}
        </div>
        {submitted && (
          <div>
            <MCQCounter
              correct_answers={stats.correct_answers}
              wrong_answers={stats.wrong_answers}
            />
            <Link
              href={{ pathname: '/statistics', query: { prop1: stats.correct_answers, prop2: numberofQ, prop3: timeEnded, prop4: startedAt} }}
              className={cn(buttonVariants({ size: "lg" }), "mt-2")}
            >
              View Statistics
              <BarChart className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
        <form onSubmit={(e) => e.preventDefault()} scrollable={true}>
          {questions.map((question, index) => (
            <Card className="w-full mt-6" key={index}>
              <div className="text-lg font-semibold">
                Question {index + 1}: {question.question}
              </div>
              <Separator className="w-full" />
              <ul>
                <li>
                  <label className="ml-2 leading-tight">
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={answers[index].option1}
                      checked={userAnswers[index] === answers[index].option1}
                      onChange={() =>
                        handleSelectAnswer(index, answers[index].option1)
                        
                      }
                    />
                    {answers[index].option1}
                  </label>
                </li>
                <li>
                  <label className="ml-2 leading-tight">
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={answers[index].option2}
                      checked={userAnswers[index] === answers[index].option2}
                      onChange={() =>
                        handleSelectAnswer(index, answers[index].option2)
                      }
                    />
                    {answers[index].option2}
                  </label>
                </li>
                <li>
                  <label className="ml-2 leading-tight">
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={answers[index].option3}
                      checked={userAnswers[index] === answers[index].option3}
                      onChange={() =>
                        handleSelectAnswer(index, answers[index].option3)
                      }
                    />
                    {answers[index].option3}
                  </label>
                </li>
              </ul>
            </Card>
          ))}
          <div className="mt-4">
            {!submitted ? (
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Link href="/dashboard">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizResults;