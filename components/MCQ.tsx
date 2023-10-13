import { FC, useState } from 'react';

interface MCQItem {
  question: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
}

interface MCQProps {
  questions: MCQItem[]; // Use the MCQItem type for 'questions'
}

// Change 'getStaticprops' to 'getStaticProps' to match Next.js conventions
export const getStaticProps = async () => {
  
  try {
    const response = await fetch("http://localhost:3000/api/chat");
    const data = await response.json();
    // const setGeneratedQuestions = data.question.questions
    return {
      props: { questions: data }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { questions: [] } // Provide a default value for 'questions'
    };
  }
};

const MCQ: FC<MCQProps> = ({ questions }) => {
  if (!questions || questions.length === 0) {
    return <div>No questions available.</div>;
  }
  return (
    <div>
      <h1>MCQ Component</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <strong>Question:</strong> {question.question}<br />
            <strong>Answer:</strong> {question.answer}<br />
            <strong>Option 1:</strong> {question.option1}<br />
            <strong>Option 2:</strong> {question.option2}<br />
            <strong>Option 3:</strong> {question.option3}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQ;