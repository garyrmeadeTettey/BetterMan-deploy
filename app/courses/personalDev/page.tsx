import React, { Suspense } from 'react'
import PersonalDevCourses from '@/components/courses/personalDev/personalDev'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Footer from '@/components/homepage/Footer'
import Loading from '@/app/loading'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={<Loading/>}>
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">PERSONAL DEVELOPMENT COURSES</CardTitle>
        <CardDescription>
          Free Courses
        </CardDescription>
      </CardHeader>
      <div className="flex">
        <PersonalDevCourses/>
      </div>
      <Footer/>
    </Card>
    </Suspense>
  )
}

export default page