import React, { Suspense } from 'react'
import ScienceCourses from '@/components/courses/science/science'
import CourseListBar from '@/components/courses/sidebar/courseListBar'
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card'
import Footer from '@/components/homepage/Footer'
import Loading from '@/app/loading'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={<Loading/>}>
    <Card className='mb-4'>
    <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">SCIENCE COURSES</CardTitle>
                <CardDescription>
                    Free Courses
                </CardDescription>
            </CardHeader>
    <div className="flex">
       
    <div className="">
      <ScienceCourses />
    </div>
  </div>
 
    </Card>
    <Footer/>
    </Suspense>
  )
}

export default page