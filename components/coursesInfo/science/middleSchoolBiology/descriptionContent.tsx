import { CardTitle } from '@/components/ui/card';
import React from 'react';

const DescriptionContent = () => {
  return (
    <div className="description-content ml-4 pb-4 mt-8">
      <CardTitle className="font-bold text-2xl mb-2">Course Overview</CardTitle>
      <p>
      Middle School Biology is designed to introduce 
      students to the fundamental concepts and principles of 
      biology, with a focus on developing a strong foundation 
      in scientific inquiry, critical thinking, and problem-solving skills. 
      This course aims to foster an understanding of the living world, from 
      the smallest microorganisms to complex ecosystems, and to cultivate
       an appreciation for the role of biology in our daily lives.
      </p>

      
      <CardTitle className="mt-4 text-2xl font-bold">Course Objectives</CardTitle>
      <ul className="list-none pl-0 mt-2">

        <li className="list-disc">
        Understanding Life: Students will explore the characteristics of living organisms and gain an understanding of what distinguishes living things from non-living things.
        </li>
        <li className="list-disc">
        Cellular Biology: This module will delve into the structure and function of cells, emphasizing the cell as the basic unit of life.
        </li>
        <li className="list-disc">
        Genetics and Heredity: Students will explore the principles of genetics, inheritance, and DNA, including how traits are passed from one generation to the next.
        </li>
        <li className="list-disc">
        Evolution: The concept of evolution will be introduced, covering the mechanisms of natural selection, adaptation, and the history of life on Earth.
        </li>
        <li className="list-disc">
        Ecology: This section will focus on the relationships between organisms and their environments, including the study of ecosystems, biomes, and human impacts on the environment.
        </li>
        <li className="list-disc">
        Human Biology: Students will learn about the structure and function of the human body, including the skeletal, muscular, circulatory, respiratory, and digestive systems.
        </li>
        <li className="list-disc">
        Diversity of Life: This module will introduce students to the incredible diversity of living organisms on Earth, from bacteria to plants and animals.
        </li>
        <li className="list-disc">
        Scientific Inquiry: Throughout the course, students will develop and practice scientific inquiry skills, including observation, experimentation, data analysis, and drawing evidence-based conclusions.
        </li>
        <li className="list-disc">
        Ethical and Environmental Considerations: Students will explore ethical dilemmas related to biology, such as genetic engineering and environmental conservation, and develop an understanding of responsible stewardship of the planet.
        </li>

          <CardTitle className="mt-4">ALL THE BEST !!!!!</CardTitle>
        
      </ul>
      <br/>
      <CardTitle className="font-bold text-2xl mb-2">Course Benefits</CardTitle>
      <p>
      Typically, this course is not for high school 
      credit but serves as a foundational science course 
      preparing students for more advanced studies in biology 
      and related fields in high school. Course 
      credit policies may vary by school district.
      </p>

    </div>
  );
};

export default DescriptionContent;
