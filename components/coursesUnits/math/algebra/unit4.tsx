"use client"
import React, { useState } from 'react';
import Layout from './layout';
import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { dbPool } from '@/lib/db/index';
import { and, eq } from 'drizzle-orm';
import { course } from '@/lib/db/schema';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';

type Props = { userId: string, currentUnit: number, totalUnits: number };

const LearningUnit = ({ userId, currentUnit, totalUnits }: Props) => {
  const isLastUnit = currentUnit === totalUnits;
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await dbPool.update(course)
        .set({ onChapter: 1, progress: isLastUnit ? 100 : (currentUnit / totalUnits) * 100, isComplete: true})
        .where(and(
          eq(course.userId, userId),
          eq(course.courseName, 'Algebra')
        ))
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
  return (
    <Layout>
     <Card className='mt-2 mb-4'>
      <div className="ml-8 mt-4">
        <h1 className="text-5xl font-bold">Systems of Linear Equations</h1>
        <CardDescription className="ml-2 mt-2 text-sm font-semibold">
          4 UNITS : 30 SKILLS
        </CardDescription>
      </div>

      {/* About this unit */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-xl">About this unit</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Introduction to Systems of Linear Equations:
            <br />
            A system of linear equations is a collection of two or more linear equations involving the same set of variables. Each equation represents a linear relationship between the variables. Generally, a system of linear equations is written in the form:
            <br />
            a₁x₁ + a₂x₂ + ... + aₙxₙ = b
            <br />
            Here, x₁, x₂, ..., xₙ are the variables, and a₁, a₂, ..., aₙ are the coefficients, while b is a constant term. A system can have more than one equation and more than one variable.
          </p>
          </div>
      </div>

      {/* Content Section */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className='p-6'>
          <CardTitle className="text-xl">Methods for Solving Systems of Linear Equations</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            There are several methods for solving systems of linear equations:
            <br />
            Graphical Method: In this method, you graph each equation on the same coordinate system and find the point of intersection, if it exists.
            <br />
            Substitution Method: You solve one equation for one variable and substitute this expression into the other equations to reduce the system to a single equation with one variable.
            <br />
            Elimination Method: You manipulate the equations to eliminate one variable, leaving you with a single equation in one variable.
            <br />
            Matrix Method: This method involves representing the system of equations as a matrix equation (Ax = b), where A is the coefficient matrix, x is the variable vector, and b is the constant vector. You can then use matrix operations to solve for x.
            <br />
            Gaussian Elimination: This is a systematic method that involves performing row operations on an augmented matrix (a matrix that includes both the coefficient matrix and the constant vector) to transform it into row-echelon form and then solve for the variables.
          </p>
          </div>
      </div>

      {/* Applications */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-xl">Applications</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Systems of linear equations are used in a wide range of applications, including:
            <br />
            Engineering: Solving systems of equations to analyze electrical circuits, structural stability, and fluid dynamics.
            <br />
            Economics: Modeling supply and demand, cost-profit analysis, and input-output analysis.
            <br />
            Physics: Describing physical phenomena such as the motion of objects under the influence of forces.
            <br />
            Computer Graphics: Transformations of 2D and 3D objects, such as scaling, rotation, and translation.
            <br />
            Machine Learning: Solving systems of equations plays a role in various machine learning algorithms, including linear regression and neural networks.
          </p>
          </div>
      </div>

      {/* Next Steps */}
      <div className="flex items-center justify-center ml-4">
        <div className="p-6">
      <CardTitle className="text-2xl font-bold text-center">Congratulations</CardTitle>
          <p className="text-gray-700 text-base mt-2 dark:text-gray-400 text-center">
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
          <Link href={`/courses/units/math/algebra/unit${currentUnit + 1}`} className="text-blue-500 hover:underline">
            <Button
              className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded"
              variant={'outline'}
              onClick={onSubmit}
            >
              Next <ChevronRight />
            </Button>
          </Link>
          </div>
        )}
        </div>
      </div>
      </Card>
    </Layout>
  );
};

export default LearningUnit;
