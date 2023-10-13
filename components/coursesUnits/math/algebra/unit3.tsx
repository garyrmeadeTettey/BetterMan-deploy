"use client"
import React, { useState } from 'react';
import Layout from './layout';
import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { dbPool } from '@/lib/db/index';
import { and, eq } from 'drizzle-orm';
import { course } from '@/lib/db/schema';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';

type Props = {userId: string};
const LearningUnit = ({userId}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
    try{
      await dbPool.update(course)
            .set({onChapter: 1, progress: 75})
            .where(and(
              eq(course.userId, userId),
              eq(course.courseName, 'Algebra')
            ))
    }catch(err){
      alert(err)
      console.log(err)
    }
    
  }
  return (
    <Layout>
     <Card className='mt-2 mb-4'>
      <div className="ml-8 mt-4">
        <h1 className="text-5xl font-bold">Graphing Linear Equations</h1>
        <CardDescription className="ml-2 mt-2 text-sm font-semibold">
          4 UNITS : 20 SKILLS
        </CardDescription>
      </div>

      {/* About this unit */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-xl">About this unit</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Graphing linear equations is a fundamental concept in algebra that provides a visual representation of the relationship between two variables. In this mathematical technique, linear equations are transformed into graphical representations on a coordinate plane, typically with an x-axis and a y-axis.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-xl">Understanding Graphs</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            The process involves identifying key components of the equation, such as the slope and the y-intercept, which determine the shape and position of the resulting line. The slope represents the rate of change, or steepness, of the line, while the y-intercept is the point where the line intersects the y-axis.
          </p>
          <p className="text-gray-700 text-base mt-2">
            By plotting points on the coordinate plane and connecting them with a straight line, students can visualize the solution to a linear equation. This graphical representation offers several benefits:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              Geometric Insights: Graphs allow students to intuitively grasp concepts like slope, which relates to the rise and run of the line. A steeper slope indicates a faster rate of change, while a horizontal line implies no change.
            </li>
            <li>
              Solution Analysis: Graphs help in identifying the solutions to linear equations. The point where the line crosses the x-axis corresponds to the solution to the equation.
            </li>
            <li>
              Real-World Applications: Graphing linear equations is widely used in various fields, including physics, economics, engineering, and social sciences, to model and analyze relationships between variables.
            </li>
            <li>
              Problem Solving: It provides a powerful tool for solving real-world problems. By converting a problem into a linear equation and graphing it, one can find solutions and make informed decisions.
            </li>
          </ul>
          <p className="text-gray-700 text-base mt-2">
            Overall, graphing linear equations is an essential skill that enhances mathematical understanding and provides a practical means of visualizing and analyzing linear relationships in both academic and real-world contexts. Mastery of this skill is foundational in the study of algebra and lays the groundwork for more advanced mathematical concepts.
          </p>
          </div>
      </div>

      {/* Next Steps */}
      <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg m-4 mt-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Next Steps</CardTitle>
          <p className="text-gray-700 text-base mt-2 dark:text-gray-400">
            Continue your learning journey by exploring the next unit.
          </p>
          <div className="flex items-center justify-center ml-4">
          <Link href="/courses/units/math/algebra/unit4">

  
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
      </Card>
    </Layout>
  );
};

export default LearningUnit;
