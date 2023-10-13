import React, { Suspense } from 'react'
import AlgebraUnits from '@/components/coursesUnits/math/algebra/unit1'
import { auth } from '@clerk/nextjs';
import LearningUnit from '@/components/coursesUnits/math/algebra/unit1';
import Loading from '@/app/loading';

type Props = {userId: string};

const page = async (props: Props) => {
  const {userId} = await auth();
  const user = userId
  return (
    <div><Suspense fallback={<Loading/>}><LearningUnit userId={userId}/></Suspense></div>
  )
}

export default page