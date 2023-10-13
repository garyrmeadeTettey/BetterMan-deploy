"use client"
import React, { useState } from 'react';
import Layout from './layout'; // Replace with the actual import path
import { CardTitle, CardDescription } from '@/components/ui/card'
import  Link  from 'next/link'; // Import the Link component
import { Button } from '@/components/ui/button'; // Replace with the actual import path
import { ChevronRight } from 'lucide-react'; // Replace with the actual import path
import { dbPool } from '@/lib/db/index';
import { course } from '@/lib/db/schema';
import { and, eq } from 'drizzle-orm';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';

type Props = { userId: string };


const LearningUnit = ({ userId }: Props) => {

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await dbPool.update(course)
        .set({ onChapter: 2, progress: 50 })
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
        <h1 className="text-5xl font-bold">Trigonometry Functions</h1>
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
            The &quot;Trigonometry Unit 2&quot; explores advanced concepts in trigonometry, building upon the foundation laid in the previous unit. In this module, students will delve into advanced trigonometric functions and their applications. This unit prepares students for more sophisticated applications of trigonometry in mathematics and various fields.
          </p>
        </div>
      </div>

      {/* Content Section 1: Advanced Trigonometric Functions */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Advanced Trigonometric Functions</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            In this section, students will explore advanced trigonometric functions beyond sine, cosine, and tangent. They will learn about functions like secant, cosecant, and cotangent, and how these functions are used in various mathematical and real-world applications.
          </p>
        </div>
      </div>

      {/* Content Section 2: Trigonometric Identities and Proofs */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Trigonometric Identities and Proofs</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Building on the basics, this section covers trigonometric identities and proofs. Students will learn how to use trigonometric identities to simplify complex expressions and prove mathematical statements related to trigonometry.
          </p>
        </div>
      </div>

      {/* Content Section 3: Applications in Physics and Engineering */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Applications in Physics and Engineering</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            This section explores the practical applications of advanced trigonometric functions in the fields of physics and engineering. Students will discover how these functions are used to solve complex problems in these disciplines.
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
          <Link href="/courses/units/math/trigonometry/unit3">

  
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
