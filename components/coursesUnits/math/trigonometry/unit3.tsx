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

type Props = { userId: string };



const LearningUnit = ({ userId }: Props) => {

    const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await dbPool.update(course)
        .set({ onChapter: 3, progress: 100 })
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
      <div className="ml-8 mt-4">
        <h1 className="text-5xl font-bold">Non-right Triangles & Trigonometry</h1>
        <CardDescription className="ml-2 mt-2 text-sm font-semibold">
          4 UNITS :30 SKILLS
        </CardDescription>
      </div>

      {/* About this unit */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">About this unit</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
          The course on &rdquo;Right Triangles & Trigonometry&rdquo; is a fundamental branch of mathematics that explores the relationships and properties of right triangles and their connection to trigonometric functions. It provides a solid foundation for understanding the principles of trigonometry and their real-world applications.

          In this course, students learn how to work 
          with right triangles, which are triangles 
          with one angle measuring 90 degrees. Key topics 
          include the Pythagorean Theorem, which establishes 
          the relationship between the lengths of the sides of 
          a right triangle, and the six trigonometric functions: 
          sine, cosine, tangent, cosecant, secant, and cotangent. 

          Furthermore, the course covers applications of 
          trigonometry in various fields, such as physics, 
          engineering, architecture, and navigation. Students 
          also gain valuable problem-solving skills and mathematical 
          reasoning abilities.
          </p>
        </div>
      </div>

      {/* Content Section 1: Trigonometric Functions and Their Properties */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Trigonometric Functions and Their Properties</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
          Understanding Right Triangles is a fundamental component of the &rdquo;Right Triangles & Trigonometry&rdquo; course. Right triangles are a special type of triangle characterized by one angle of 90 degrees, known as the right angle. In this course, students dive into the intricacies of right triangles, learning to identify and work with their key components.
          </p>
        </div>
      </div>

      {/* Content Section 2: Applications in Science and Engineering */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Applications in Science and Engineering</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Building on the understanding of trigonometric functions, this section explores their applications in science and engineering. Students will discover how these functions are used to model and solve real-world problems in physics, mechanics, and more.
          </p>
        </div>
      </div>

      {/* Content Section 3: Advanced Trigonometric Equations */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Advanced Trigonometric Equations</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            This section covers advanced trigonometric equations and their solutions. Students will learn to solve equations involving trigonometric functions and apply these skills to solve complex mathematical problems.
          </p>
        </div>
      </div>

      {/* Content Section 4: Next Steps */}
      <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg m-4 mt-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Next Steps</CardTitle>
          <p className="text-gray-700 text-base dark:text-gray-400">
            Continue your learning journey by exploring the next unit.
          </p>
          <div className="flex items-center justify-center ml-4">
          <Link href="/courses/units/math/trigonometry/unit4">

  
          <Button
            className="bg-white hover:bg-gray-200 mt-2 text-black hover-text-white font-bold py-2 px-4 rounded"
            variant={'outline'}
            onClick={onSubmit}
          >
             {isLoading ? <Spinner/> : <>Next <ChevronRight /></>}
          </Button>
        </Link>



        </div>

        </div>
      </div>
    </Layout>
  );
};

export default LearningUnit;
