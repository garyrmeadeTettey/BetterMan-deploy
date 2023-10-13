import { FC, Suspense } from 'react'
import { auth } from '@clerk/nextjs';
import LearningUnit from '@/components/coursesUnits/math/trigonometry/unit1';
import Loading from '@/app/loading';

type Props = {}

const page = async (props: Props) => {
  const {userId} = await auth();
  const user = userId
  return (
    <div><Suspense fallback={<Loading/>}><LearningUnit userId={userId}/></Suspense></div>
  )
}

export default page