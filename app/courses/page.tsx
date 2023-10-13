import React, { Suspense } from 'react'
import CourseListBar from '../../components/courses/sidebar/courseListBar'
import  MathCourse from '../../components/courses/math/math'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import Footer from '../../components/homepage/Footer'
import { auth } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Loading from '../loading'
import { PageWrapper } from '../animate'

type Props = {
  userId: string; // Use 'userId' instead of 'userID'
};

const variants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
}

const image = {
  hidden: {
    opacity: 0,
    y: 30,
  }
}

const page = async (props: Props) => {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <Suspense fallback={<Loading/>}>
      <PageWrapper>
    <Card className='mb-4'>
    <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">MATHEMATICS COURSES</CardTitle>
                <CardDescription>
                    Free Courses
                </CardDescription>
            </CardHeader>
    <div className="flex">
       

    {/* <div className="w-1/4">
      <CourseListBar />
    </div> */}
    <div className="mb-4">
      <MathCourse userId={userId}/>
    </div>
  </div>

    </Card>
    <Footer/>
    </PageWrapper>
    </Suspense>
  )
}

export default page