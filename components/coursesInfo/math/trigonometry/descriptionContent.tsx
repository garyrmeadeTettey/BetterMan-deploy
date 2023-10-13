import { CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const DescriptionContent = () => {
  const contentStyle: React.CSSProperties = {
    textAlign: 'left', // Align the content to the left
    marginTop: '16px', // Add margin for spacing
  };

  return (
    <div className="description-content ml-4 pb-4 mt-8" style={contentStyle}>
      <CardTitle className="font-bold text-2xl mb-2">Course Overview</CardTitle>
      <Separator className='bg-gray-400'/>
      <p className='mt-2'>
      Trigonometry Fundamentals is a 
      comprehensive course designed to 
      provide students with a solid foundation
       in trigonometric concepts and 
       applications. Trigonometry is a branch 
       of mathematics that focuses on the
        relationships between angles and the 
        sides of triangles. This course will 
        explore the fundamental principles of 
        trigonometry, enabling students to 
        solve various real-world problems 
        involving angles,
       triangles, and periodic phenomena.
      </p>

      
      <CardTitle className="mt-4 text-2xl font-bold">Course Objectives</CardTitle>
      <Separator className='bg-gray-400'/>
      <ul className="list-none pl-0 mt-2">

        <li className="list-disc">
        To introduce students to the basic trigonometric functions: sine, cosine, and tangent.
        </li>
        <li className="list-disc">
         To develop a deep understanding of the properties of right triangles and their relevance in trigonometry.
        </li>
        <li className="list-disc">
        To explore the unit circle and its role in trigonometric calculations.
        </li>
        <li className="list-disc">
        To apply trigonometric functions to solve problems involving angles, distances, heights, and periodic phenomena.
        </li>
        <li className="list-disc">
        To explore the unit circle and its role in trigonometric calculations.
        </li>
        <li className="list-disc">
        To apply trigonometric functions to solve problems involving angles, distances, heights, and periodic phenomena
        </li>
        <li className="list-disc">
        To introduce inverse trigonometric functions and their applications.
        </li>
        <li className="list-disc">
        To foster critical thinking skills and problem-solving abilities in various trigonometric contexts.
        </li>
        <li className="list-disc">
        To prepare students for advanced mathematics courses that rely on trigonometric principles.
        </li>

          <CardTitle className="mt-4">ALL THE BEST !!!!!</CardTitle>
        
      </ul>
      <br/>
      <CardTitle className="font-bold text-2xl mb-2 text-center">Course Benefits</CardTitle>
      <Separator className='bg-gray-400'/>
      <p className="mt-2 text-center">
      By the end of Trigonometry Fundamentals, students will have
       gained a strong grasp of trigonometric concepts and the ability 
       to apply them to various practical situations. This course serves as 
       a foundation for further study in mathematics, 
      science, engineering, and other fields that require trigonometric knowledge.
      </p>

    </div>
  );
};

export default DescriptionContent;
