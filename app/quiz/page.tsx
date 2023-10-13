import LoadingQuestions from '@/components/LoadingSkeleton';
import QuizCreation from '@/components/QuizCreation';
import { auth } from '@clerk/nextjs';

import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

type Props = {}

export const metadata = {
    title: "BetterMan | Quiz",
    description: "Quiz yourself on anything!",
};

const QuizPage = async (props: Props) => {
  const { userId } = await auth();
    const isAuth = !!userId;

    if(!isAuth){
        redirect('/')
    }
  return (
    <div>
      <Suspense fallback={<LoadingQuestions/>}>
        <QuizCreation />
        </Suspense>
    </div>
  )
}

export default QuizPage