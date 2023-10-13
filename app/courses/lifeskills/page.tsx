import React, { Suspense } from 'react'
import LsCourses from '@/components/courses/lifeskills/lifeskills'
import CourseListBar from '@/components/courses/sidebar/courseListBar'
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card'
import Footer from '@/components/homepage/Footer'
import Loading from '@/app/loading'
type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={<Loading/>}>
    <Card>
    <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">LIFE-SKILLS COURSES</CardTitle>
                <CardDescription>
                    Free Courses
                </CardDescription>
            </CardHeader>
    <div className="flex">
       


    <div className="">
      <LsCourses />
    </div>
  </div>
  <Footer/>
    </Card>
    </Suspense>
  )
}

export default page