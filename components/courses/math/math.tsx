'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import Layout from '@/components/courses/sidebar/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CourseProgress } from './courseprogess'; // Import the CourseProgress component
import { dbPool } from '@/lib/db/index';
import { course } from '@/lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { UserButton, useUser, auth } from '@clerk/nextjs';
import { Spinner } from '@/components/ui/spinner';

interface CourseCardProps {
    title: string;
    imageUrl: string;
    duration: string;
    link: string;
    progress: number; // Add progress as a prop
}



const CourseCard = async ({ title, imageUrl, duration, link, progress }: CourseCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true)
  }


  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">
        <div>
          <img alt={`Image for ${title}`} className="blockimages" src={imageUrl} />
        </div>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <span className="no-underline font-bold dark:text-white hover:underline text-black">
              {title}
            </span>
          </h1>
        </header>
        <ul>
          <li>
            <div className="clockdisplay mb-2 ml-4">
              <div className="clockicon">
                <FaClock color="#777575" />
              </div>
              <p className="clocktext font-semibold">{duration}</p>
            </div>
          </li>
        </ul>

        {/* Course progress */}
        <div className="mt-4">
          <CourseProgress value={progress} variant="default" size="default" />
        </div>

        <div className="flex space-x-4">
          <Link href={link} className="flex-1">
            <Button onClick={onSubmit} className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
            {isLoading ? <Spinner/> : "More Info"} 
            </Button>
          </Link>
          {/* Enroll button */}
          {/* <Link href="/courses/units/math/algebra/unit1">
            <Button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
              Enroll
            </Button>
          </Link> */}
        </div>
      </article>
    </div>
  );
};

type Props = {userId: string};
const MathCourse = async ({userId}: Props) => {
  
  const algCourses = await dbPool
  .select(
   { field1: course.progress,}
  )
  .from(course)
  .where(and(
    eq(course.userId, userId),
    eq(course.courseName, 'Algebra')
  ))
  // .where(eq(course.userId, userId, course.courseName, 'Algebra'))
  

const algebraProgress = algCourses[0]?.field1 || 0;

    const trigCourses = await dbPool
    .select(
      {field1: course.progress}
    )
    .from(course)
    .where(and(
      eq(course.userId, userId),
      eq(course.courseName, 'Trigonometry')
    ))
  const trigProgress = trigCourses[0]?.field1 || 0;
    
  return (
    <Layout>
      <Card className="dark:bg-gray-950">
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <CourseCard
              title="Algebra"
              imageUrl="https://img.freepik.com/free-photo/colleagues-making-business-plan-meeting-close-up_176420-5105.jpg?w=740&t=st=1692783789~exp=1692784389~hmac=94117eeef9a92dfbb8df10be4824e819acd724b2457427c3834781668bc0c0e9"
              duration="2-4 hrs"
              link="/courses/moreInfo/math/algebra"
              progress={algebraProgress} // Add progress value here
            />
            <CourseCard
            title="Trigonometry"
            imageUrl="https://img.freepik.com/free-photo/learning-education-mathematics-calculation-teaching-concept_53876-167099.jpg?w=740&t=st=1692783658~exp=1692784258~hmac=b2de0eca6befa0ba474f6289ba6ed99daf5dacab891ca5bdc5aab1f8a849dd94"
            duration="2-4 hrs"
            link="/courses/moreInfo/math/trigonometry"
            progress={trigProgress} 
        />
        <CourseCard
            title="Fractions"
            imageUrl="https://img.freepik.com/free-photo/top-view-kid-cheating-school_23-2150105004.jpg?w=740&t=st=1692783747~exp=1692784347~hmac=07ce9e9b8d006f046502a4222b5240ad90e3444c98429226a20ae53edf923091"
            duration="2-4 hrs"
            link="/courses/moreInfo/math/fractions"
            progress={0} 
        />
        
        <CourseCard
            title="Basic Geometry and Measurement"
            imageUrl="https://img.freepik.com/free-vector/geometry-education-blue-background-vector-frame-disruptive-education-digital-remix_53876-114094.jpg?w=740&t=st=1692783304~exp=1692783904~hmac=bdfca1826ff369d27db272250ede3e1b7efedaebda93839e24a74a2daa5d66dc"
            duration="2-4 hrs"
            link="/courses/moreInfo/math/basic-geometry"
            progress={0} 
        />
        <CourseCard
            title="Statistics and Probability"
            imageUrl="https://img.freepik.com/free-photo/top-view-workmates-talking-about-bar-chart_1098-338.jpg?w=740&t=st=1692783555~exp=1692784155~hmac=2dd8f3a5b579559b20f166a8964583f3aa4498342341eb06b74695fceb117e31"
            duration="2-4 hrs"
            link="/courses/moreInfo/math/statistics"
            progress={0} 
        />
        <CourseCard
            title="Multivariate Calculus"
            imageUrl="https://img.freepik.com/free-photo/calculator-with-pen-business-plan-paper_23-2147965727.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais"
            duration="2-4 hrs"
            link="/courses/moreInfo/math/multivariate-calculus"
            progress={0} 
        />
        </div>

        </div>
      </Card>
    </Layout>
  );
}

export default MathCourse;


