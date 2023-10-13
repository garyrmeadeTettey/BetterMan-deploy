"use client"
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import { redirect, useRouter, useSearchParams} from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingQuestions from "./LoadingQuestions";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { useChat } from 'ai/react';
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { question, topic_count } from "@/lib/db/schema";
import { nanoid } from 'nanoid'
import { auth } from "@clerk/nextjs";
import { dbPool } from "@/lib/db/index";
import { eq } from "drizzle-orm";

// Define the Props type
type Props = {
  topic: string;
};

// Define the Input type using Zod schema
type Input = z.infer<typeof quizCreationSchema>;
type NewQuestion = typeof question.$inferInsert;

// Create the QuizCreation component
const QuizCreation = () => {
  // Initialize React Router
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state variables
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const { toast } = useToast();
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);
  const [generatedAnswers, setGeneratedAnswers] = useState<any[]>([]);
  const [responseData, setResponseData] = useState<any | null>(null);
  const [topic, setTopic] = useState('');

  // Initialize form using react-hook-form
  const form = useForm<Input>({
    defaultValues: {
      topic: '',
      type: "mcq",
      amount: 3,
    },
  });

  // Initialize useChat hook for handling chat interactions
  const {
    input,
    messages,
    handleInputChange,
    handleSubmit,
    data,
    isLoading,
  } = useChat({
    body: {
      topic: form.watch('topic'),
      amount: form.watch('amount'),
      type: form.watch('type'),
    },
    onResponse: async (response) => {
      if (response.ok) {
        try {
          setTopic(form.watch('topic')) // Store the topic in state
          const responseData = await response.json();
          setGeneratedQuestions(responseData.question.questions);
          setGeneratedAnswers(responseData.question.answers);
          setResponseData(responseData);

          const queryParams = new URLSearchParams();
          queryParams.append("generatedQuestions", JSON.stringify(responseData.question.questions));
          queryParams.append("generatedAnswers", JSON.stringify(responseData.question.answers));
          
          const queryString = queryParams.toString();
          // const url = `/questions?${queryString}`;
          
          const selectedType = form.getValues("type");
           let destinationRoute = `/questions?${queryString}`; // Default to "/questions" for "mcq"
           if (selectedType === "open_ended") {
           destinationRoute = `/play/open-ended?${queryString}`; // Change to "/open-ended" for open-ended
         }
          router.push(destinationRoute);
        } catch (error) {
          console.error("API error:", response.status, response.statusText);
        }
      }
    }
  });

  // Define the onSubmit function to handle form submission
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      // Insert the topic into the database using dbPool
      
      console.log('Topic saved successfully');
    } catch (error) {
      console.error('Error saving topic:', error);
    }

    // Call handleSubmit to continue with the form submission
    handleSubmit(e);
  }

  // If loading, display a loading component
  if (showLoader) {
    return <LoadingQuestions finished={finishedLoading} />;
  }

  return (
    <div className="animate-pulse absolute -translate-x-1/2   left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Creation</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topic</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter a topic"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide any topic you would like to be quizzed on
                        here.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Questions</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How many questions?"
                          type="number"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.setValue('amount', parseInt(e.target.value));
                            handleInputChange(e);
                          }}
                          min={1}
                          max={10}
                        />
                      </FormControl>
                      <FormDescription>
                        You can choose how many questions you would like to be
                        quizzed on here.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <Button
                    variant={
                      form.getValues("type") === "mcq" ? "default" : "secondary"
                    }
                    className="w-1/2 rounded-none rounded-l-lg"
                    onClick={(e) => {
                      form.setValue("type", "mcq");
                    }}
                    type="button"
                  >
                    <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                  </Button>
                  <Separator orientation="vertical" />
                  <Button
                    variant={
                      form.getValues("type") === "open_ended"
                        ? "default"
                        : "secondary"
                    }
                    className="w-1/2 rounded-none rounded-r-lg"
                    onClick={(e) => {
                      form.setValue("type", "open_ended");
                    }}
                    type="button"
                  >
                    <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                  </Button>
                </div>
                <Button disabled={isLoading} type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      

    </div>
  );
};

export default QuizCreation;
