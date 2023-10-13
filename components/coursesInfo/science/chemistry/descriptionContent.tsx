import { CardTitle, CardDescription} from '@/components/ui/card';
import React from 'react';

const DescriptionContent = () => {
  return (
    <div className="description-content ml-4 pb-4 mt-8">
      <CardTitle className="font-bold text-2xl mb-2">Course Overview</CardTitle>
      <p>
      General Chemistry is a foundational course that explores the fundamental
      principles and concepts of chemistry. This course provides students
      with a solid understanding of the structure of matter, chemical 
      reactions, and the periodic table. It is designed to prepare students
      for more advanced studies in chemistry and related fields.
      </p>

      
      <CardTitle className="mt-4 text-2xl font-bold">Course Objectives</CardTitle>
      <CardDescription>Upon successful completion of this course, students will:</CardDescription>
      <ul className="list-none pl-0 mt-2">

        <li className="list-disc">
        Understand Atomic Structure: Gain a deep understanding of the structure of atoms, including the arrangement of electrons, protons, and neutrons.
        </li>
        <li className="list-disc">
        Chemical Bonding: Explore different types of chemical bonds, such as covalent and ionic bonds, and understand how they influence the properties of compounds.
        </li>
        <li className="list-disc">
        Chemical Reactions: Learn the principles of chemical reactions, including stoichiometry, balancing equations, and predicting products.
        </li>
        <li className="list-disc">
        Thermodynamics: Study the laws of thermodynamics, including energy transfer, enthalpy, and entropy.
        </li>
        <li className="list-disc">
        Gases and Kinetics: Analyze the behavior of gases and the rates of chemical reactions, including factors that affect reaction rates.
        </li>
        <li className="list-disc">
        The Periodic Table: Examine the organization of elements in the periodic table, trends in elemental properties, and periodicity.
        </li>
        <li className="list-disc">
        Chemical Equilibrium: Understand the concept of chemical equilibrium and how it relates to reversible reactions.
        </li>
        <li className="list-disc">
        Acids and Bases: Explore the properties of acids and bases, including pH, acid-base reactions, and buffers.
        </li>
        <li className="list-disc">
        Chemical Kinetics: Study reaction mechanisms, rate laws, and factors affecting reaction rates.
        </li>

          <CardTitle className="mt-4">ALL THE BEST !!!!!</CardTitle>
        
      </ul>
      <br/>
      <CardTitle className="font-bold text-2xl mb-2">Course Benefits</CardTitle>
      <p>
      This course offers a well-rounded education in scientific principles, 
      problem-solving, and laboratory skills. It can prepare you for a variety 
      of careers and provide a solid foundation for further academic pursuits.
       Additionally, the skills and knowledge gained from studying chemistry can
        contribute to your personal and intellectual growth, making you a more 
        informed and engaged citizen in today&apos;s world.
      </p>

    </div>
  );
};

export default DescriptionContent;
