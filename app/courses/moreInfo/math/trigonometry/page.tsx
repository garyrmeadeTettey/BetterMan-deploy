import React, { Suspense } from 'react'
import MoreInfo from '@/components/coursesInfo/math/trigonometry/moreInfo'
import { auth } from '@clerk/nextjs';
import Loading from '@/app/loading';


type Props = {
  userId: string; // Use 'userId' instead of 'userID'
};

const page =async (props: Props) => {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
   
    <div> <MoreInfo userId={userId}/></div>
   
  )
}

export default page