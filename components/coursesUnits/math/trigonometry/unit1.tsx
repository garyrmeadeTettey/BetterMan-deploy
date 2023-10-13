"use client"
import React, { useState } from 'react';
import Layout from './layout';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { dbPool } from '@/lib/db/index';
import { course } from '@/lib/db/schema';
import { and, eq } from 'drizzle-orm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
        .set({ onChapter: 1, progress: 25 })
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
        <h1 className="text-5xl font-bold">Introduction to Trigonometry</h1>
        <CardDescription className="ml-2 mt-2 text-sm font-semibold">
          4 UNITS : 30 SKILLS
        </CardDescription>
      </div>

      {/* About this unit */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">About this unit</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            The &quot;Trigonometry&quot; module explores the fascinating world of trigonometric functions and their applications. In this module, students delve into the principles of trigonometry, trigonometric identities, and how these mathematical tools are utilized in solving real-world problems. This module provides the necessary foundation for understanding angles, sine, cosine, tangent, and the practical applications of trigonometry in fields such as physics, engineering, and architecture.
          </p>
        </div>
      </div>

      {/* Content Section 1: Understanding Trigonometric Functions */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Understanding Trigonometric Functions</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            This section provides a comprehensive overview of trigonometric functions, including sine, cosine, and tangent. Students will gain a deep understanding of how these functions relate to angles and the properties they exhibit in various trigonometric identities.
          </p>
        </div>
      </div>

      {/* Content Section 2: Applications of Trigonometry */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Applications of Trigonometry</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Trigonometry plays a crucial role in real-world applications, from calculating distances using triangulation to analyzing periodic phenomena. This section explores the practical applications of trigonometry in various fields, including physics, engineering, architecture, and navigation.
          </p>
        </div>
      </div>

      {/* Content Section 3: Next Steps */}
      <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg m-4 mt-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Next Steps</CardTitle>
          <p className="text-gray-700 text-base dark:text-gray-400">
            Continue your learning journey by exploring the next unit.
          </p>
          <div className="flex items-center justify-center ml-4">
          <Link href="/courses/units/math/trigonometry/unit2">

  
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
