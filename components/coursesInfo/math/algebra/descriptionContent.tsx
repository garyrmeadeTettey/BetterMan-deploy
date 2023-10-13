import { CardTitle, CardDescription } from '@/components/ui/card';
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
      <Separator className="bg-gray-400" />
      <p className="mt-2">
        Algebra is a fundamental branch of mathematics that explores the principles of mathematical
        symbols and their manipulation to solve equations and understand the relationships between
        quantities. This comprehensive Algebra course is designed to provide students with a solid
        foundation in algebraic concepts, problem-solving techniques, and mathematical reasoning.
        Whether you are a beginner or seeking to refresh your algebraic skills, this course will guide
        you through the essential topics of algebra.
      </p>

      <CardTitle className="font-bold text-2xl mt-4 mb-2">Course Objectives</CardTitle>
      <Separator className="bg-gray-400" />
      {/* <CardDescription>By the end of this course, students will be able to…</CardDescription> */}
      <ul className="list-none pl-0 mt-2">
        <li className="list-disc">
          To introduce students to the basic principles of algebra, including variables, expressions,
          and equations.
        </li>
        <li className="list-disc">To develop student&apos;s ability to manipulate algebraic expressions and solve equations.</li>
        <li className="list-disc">
          To provide a deeper understanding of the fundamental concepts of algebra, such as linear
          equations, polynomials, and functions.
        </li>
        <li className="list-disc">To enable students to apply algebraic techniques to real-world problems and situations.</li>
        <li className="list-disc">To prepare students for more advanced mathematics courses and standardized tests.</li>

        <CardTitle className="mt-4 list-disc">ALL THE BEST!!!!!</CardTitle>
      </ul>

      <CardTitle className="font-bold text-2xl mt-8 mb-2 text-center">Course Benefits</CardTitle>
      <Separator className="bg-gray-400" />
      <p className="mt-2 text-center">
        This course offers a wide array of benefits, from academic and career advantages to improved
        problem-solving abilities and financial literacy. It&apos;s a foundational skill that can have
        a lasting impact on your personal and professional development.
      </p>
    </div>
  );
};

export default DescriptionContent;
