"use client"
import React, { Suspense, useState } from 'react';
import Layout from './layout';
import { Card, CardTitle, CardDescription } from '../../../../components/ui/card';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { dbPool } from '../../../../lib/db/index';
import { course } from '../../../../lib/db/schema';
import { auth } from '@clerk/nextjs';

import { and, eq } from 'drizzle-orm';

// import { eq } from 'drizzle-orm';
import { Separator } from '../../../../components/ui/separator';
import Loading from '@/app/loading';
import { Spinner } from '@/components/ui/spinner';



type Props = {userId: string};



const LearningUnit = ({userId}: Props) => {
  const onSubmit = async () => {
    setIsLoading(true);
    try{
      await dbPool.update(course)
            .set({onChapter: 1, progress: 25})
            .where(and(
              eq(course.userId, userId),
              eq(course.courseName, 'Algebra')
            ))
    }catch(err){
      alert(err)
      console.log(err)
    }
    
  }

  const [isLoading, setIsLoading] =useState(false);

  return (
    <Suspense fallback={<Loading/>}>
    <Layout>
      <Card className='mt-2 mb-4'>
      <div className="ml-8 mt-4">
        <h1 className="text-5xl font-bold">Introduction to Algebra</h1>
        <CardDescription className="ml-2 mt-2 text-sm font-semibold">
          4 UNITS : 30 SKILLS
        </CardDescription>
      </div>

      {/* About this unit */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">
            About this Unit
          </CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2 dark:text-gray-400 dark:text-gray-400">
            The &quot;Introduction to Algebra&quot; module serves as the foundational cornerstone of the algebra course. In this module, students are introduced to the fundamental concepts of algebra, setting the stage for their journey into the world of mathematical problem-solving and expression manipulation. This module provides the necessary groundwork for understanding variables, expressions, equations, and the role of algebra in both mathematics and real-life scenarios.
          </p>
        </div>
      </div>

      {/* Content Section 1: Understanding the Role of Algebra */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Understanding the Role of Algebra</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2 dark:text-gray-400 dark:text-gray-400">
            This section provides an overview of the significance of algebra in the realm of mathematics and its practical applications in solving real-world problems. Students learn how algebra serves as a powerful tool for making sense of and solving a wide range of scenarios, from simple calculations to complex equations.
          </p>
        </div>
      </div>

      {/* Content Section 2: Identifying Variables and Constants */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Identifying Variables and Constants</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2 dark:text-gray-400 dark:text-gray-400">
            In algebra, variables and constants play distinct roles in forming algebraic expressions and equations. Understanding the difference between them is fundamental to solving problems and manipulating mathematical expressions effectively.
          </p>
          <br/>
          <p className="text-gray-700 text-base dark:text-gray-400">
            <strong>Variables:</strong><br/>
            Variables are symbols or letters used to represent unknown or changing values in algebraic expressions and equations. Commonly used variables include letters like &quot;x,&quot; &quot;y,&quot; &quot;a,&quot; &quot;b,&quot; and so on. Variables represent quantities that can vary or change. They often stand for values that we want to find or solve for in equations. Variables allow us to create equations that express relationships between different quantities. For example, &quot;2x&quot; represents twice the value of x, where x is the variable. In equations, variables are the values we aim to isolate or solve for by performing various mathematical operations.
          </p>
          <br/>
          <p className="text-gray-700 text-base dark:text-gray-400">
            <strong>Constants:</strong><br/>
            Constants are fixed values that do not change within a given context or problem. They are often represented by specific numbers, such as 2, 3.14 (π), or -5. Constants are used in algebraic expressions to provide known values or coefficients. For instance, in the expression &quot;3x,&quot; the constant &quot;3&quot; multiplies the variable &quot;x.&quot; Constants remain the same throughout an equation or expression and are used to scale or modify the impact of variables. In real-world applications, constants can represent known quantities, such as conversion factors, interest rates, or physical constants like the speed of light.
          </p>
          <br/>
          <p className="text-gray-700 text-base dark:text-gray-400">
            <strong>Why Identifying Variables and Constants Matters:</strong><br/>
            Formulating Equations: Variables and constants are essential for creating equations that model real-world problems. Variables represent the quantities that can change, while constants provide known values or coefficients. Problem Solving: In problem-solving, identifying variables helps us define what we are trying to find or solve for. Constants provide the known values needed to set up equations. Algebraic Manipulation: When simplifying algebraic expressions or solving equations, its crucial to distinguish between variables and constants. This distinction guides the application of mathematical operations. Interpretation: In mathematical modeling, variables and constants enable us to interpret the meaning of equations. Variables can represent physical quantities like distance, time, or cost, while constants can represent fixed parameters.
          </p>
        </div>
      </div>
      <Separator/>

      {/* Content Section 3: Next Steps */}
      <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg m-4 mt-4">
        <div className="p-6">
          <CardTitle className="text-2xl font-bold">Next Steps</CardTitle>
          <p className="text-gray-700 text-base dark:text-gray-400">
            Continue your learning journey by exploring the next unit.
          </p>
          <div className="flex items-center justify-center ml-4">
          <Link href="/courses/units/math/algebra/unit2">

  
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
    </Suspense>
  );
};



export default LearningUnit;

