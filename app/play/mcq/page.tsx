import Loading from '@/app/loading';
import MCQ from '@/components/MCQ';
import { FC, Suspense } from 'react';

interface MCQProps {
  questions: any[]; // Define the type for the 'questions' prop here
}

const Page: FC<MCQProps> = ({ questions }) => {
  return <Suspense fallback={<Loading/>}><MCQ questions={questions} /></Suspense>; // Pass the 'questions' prop to MCQ
};

export default Page;
