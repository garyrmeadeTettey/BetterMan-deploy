"use client"
import React, { useState } from 'react';
import Layout from './layout';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { dbPool } from '@/lib/db/index';
import { course } from '@/lib/db/schema';
import { and, eq } from 'drizzle-orm';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';

type Props = { userId: string, currentUnit: number, totalUnits: number };

const LearningUnit = ({ userId, currentUnit, totalUnits }: Props) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const isLastUnit = currentUnit === totalUnits;
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await dbPool.update(course)
      .set({ onChapter: 4, progress: isLastUnit ? 100 : (currentUnit / totalUnits) * 100, isComplete: true})
      .where(and(
        eq(course.userId, userId),
        eq(course.courseName, 'Trigonometry')
      ))
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="mx-4 mt-4">
        <h1 className="text-5xl font-bold">Trigonometry Unit 4</h1>
        <CardDescription className="mt-2 text-lg font-semibold">
          4 UNITS : 36 SKILLS
        </CardDescription>
      </div>

      {/* Lesson 1: Trigonometric Functions */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Lesson 1: Explaining Trigonometric Functions</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Trigonometric functions, such as sine, cosine, and tangent, are essential mathematical tools used to describe relationships between angles and sides in triangles. In this lesson, you will learn the fundamental concepts of these functions and how they apply to real-world problems.
          </p>
        </div>
      </div>

      {/* Lesson 2: Applications in Science and Engineering */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Lesson 2: Applications in Science and Engineering</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Discover how trigonometric functions are used in various scientific and engineering disciplines, making them powerful tools for solving complex problems in physics, mechanics, and more.
          </p>
        </div>
      </div>

      {/* Lesson 3: Trigonometric Equations */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Lesson 3: Solving Trigonometric Equations</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            This lesson will guide you through solving equations that involve trigonometric functions, providing you with the skills to tackle mathematical challenges in trigonometry.
          </p>
        </div>
      </div>

     {/* Next Steps */}
     <div className="flex items-center justify-center ml-4">
        <div className="p-6">
      <CardTitle className="text-2xl font-bold text-center">Congratulations</CardTitle>
          <p className="text-gray-700 text-base mt-2 mt-2 dark:text-gray-400 text-center">
            You are done with this course. You can learn further with AI-Assistant, by uploading you own personal notes.
          </p>
      {isLastUnit ? (
        
          <div className="flex items-center justify-center ml-4 mt-2">
          <Link href="/contact">
            <Button
              className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded"
              variant={'outline'}
              onClick={onSubmit}
            >
              {isLoading ? <Spinner/> : "Done"}
            </Button>
          </Link>
          </div>
        ) : (
          <div className="flex items-center justify-center ml-4">
          <Link href={`/courses/units/math/trigonometry/unit${currentUnit + 1}`} className="text-blue-500 hover:underline">
            <Button
              className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded"
              variant={'outline'}
              onClick={onSubmit}
            >
                {isLoading ? <Spinner/> : <>Next <ChevronRight /></>}
            </Button>
          </Link>
          </div>
        )}
        </div>
      </div>
    </Layout>
  );
};

export default LearningUnit;