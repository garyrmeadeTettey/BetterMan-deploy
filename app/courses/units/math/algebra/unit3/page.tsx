import React from 'react'
import { auth } from '@clerk/nextjs';
import LearningUnit from '@/components/coursesUnits/math/algebra/unit3';

type Props = {}

const page = async (props: Props) => {
  const {userId} = await auth();
  const user = userId
  return (
    <div><LearningUnit userId={userId}/></div>
  )
}

export default page