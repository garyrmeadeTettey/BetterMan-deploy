import React, { Suspense } from 'react'
import TechCourses from '@/components/courses/technology/technology'
import CoursesList from '@/components/courses/sidebar/courseListBar'
import { CardHeader, CardTitle, CardDescription, Card, CardContent } from '@/components/ui/card'
import Footer from '@/components/homepage/Footer'
import Loading from '@/app/loading'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={<Loading/>}>
    <Card>
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">TECHNOLOGY COURSES</CardTitle>
      <CardDescription>
        Free Courses
      </CardDescription>
    </CardHeader>
  
   
      <CardContent className="">
        <TechCourses />
      </CardContent>
      <Footer/>
    </Card>
    </Suspense>
  )
}

export default page