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

type Props = {userId: string};
const LearningUnit = ({userId}: Props) => {

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
    try{
      await dbPool.update(course)
            .set({onChapter: 1, progress: 50})
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
        <h1 className="text-5xl font-bold">Solving Linear Equations</h1>
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
            This module is dedicated to the study of linear equations, which are fundamental in algebra. Linear equations represent relationships between variables in a straightforward manner, making them essential for solving a wide range of problems in mathematics and real-life scenarios. In this module, students learn various techniques for solving linear equations and explore practical applications of these equations.
          </p>
          </div>
      </div>

      {/* Content Section 1: Solving One-Step Equations */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-xl">Solving One-Step Equations</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            One-step equations are algebraic equations that can be solved with a single operation. These operations include addition, subtraction, multiplication, or division. The objective is to isolate the variable and find its specific value.
          </p>
          </div>
      </div>

      {/* Content Section 2: Solving Two-Step Equations */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
          <div className="p-6">
          <CardTitle className="text-xl">Solving Two-Step Equations</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Two-step equations involve two distinct operations to isolate the variable. Typically, the equation is first simplified by performing addition or subtraction and then by multiplication or division.
          </p>
          </div>
    
      </div>

      {/* Content Section 3: Sub-Topic 3: Solving Multi-Step Equations */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-xl">Solving Multi-Step Equations</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Multi-step equations are more complex than one- or two-step equations. They involve multiple operations, and the goal is to systematically simplify the equation and isolate the variable.
          </p>
          </div>
      </div>

      {/* Content Section 4: Sub-Topic 4: Applications of Linear Equations */}
      <div className="rounded-lg overflow-hidden shadow-lg m-4">
        <div className="p-6">
          <CardTitle className="text-xl">Applications of Linear Equations</CardTitle>
          <Separator/>
          <p className="text-gray-700 text-base mt-2">
            Practical Applications: This sub-topic explores how linear equations are applied to solve real-world problems. Linear equations are used to model and find solutions for various scenarios in fields like finance, physics, engineering, and more.
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
          <Link href="/courses/units/math/algebra/unit3">

  
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

