import { FC } from 'react'
import { auth } from '@clerk/nextjs';
import LearningUnit from '@/components/coursesUnits/math/trigonometry/unit4';

type Props = {}

const page = async (props: Props) => {
  const currentUnit = 4; // Set the current unit to 4 for Unit 4
  const totalUnits = 4; // Set the total units to 4
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div><LearningUnit userId={userId} currentUnit={currentUnit} totalUnits={totalUnits} /></div>
  )
}

export default page