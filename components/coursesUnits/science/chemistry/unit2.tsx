import React from 'react';
import Layout from './layout';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardTitle } from '@/components/ui/card';


const Tutorials: React.FC = () => {
    
  return (
    <Layout>
      <Card>
      <CardTitle className='text-sm font-bold ml-4 mt-2'>Science . Biology</CardTitle><br></br>
      <h1>
        <b className="text-5xl ml-4">Chemical Reactions and Stoichiometry</b>
      </h1>
      <div className="flex flex-col items-start ml-4 mt-2 font-semibold ml-2">4 UNITS : 30 SKILLS </div><br></br>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <div className="font-bold text-2xl mb-2 dark:text-gray-400">About this unit</div>
          <p className="text-gray-700 text-base dark:text-white">

            Chemical reactions and stoichiometry are fundamental concepts in 
            chemistry that describe how substances interact and transform in chemical 
            processes. This comprehensive overview explores the key aspects of 
            chemical reactions, including the balancing of chemical equations, the 
            mole concept, and stoichiometric calculations.
          </p>
        </div>
      </div>
      <br></br>
      <div
        className="rounded overflow-hidden shadow-lg border border-gray-300 relative"
        style={{ backgroundImage: "url(your-image-url.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-gray-400 text-black  font-black px-10 py-2">
          <h3 className="font-bold text-2xl mb-2 dark:text-black">Content</h3>
          <hr></hr>
        </div>

            <div className="px-10 py-4">
                <p className="text-gray-700 text-base dark:text-white">
                Chemical reactions involve the transformation of reactants 
                into products through the breaking and forming of chemical 
                bonds. Stoichiometry is the quantitative study of the 
                relationships between reactants and products in a chemical 
                reaction.
                </p>
            </div>


            <div className="px-10 py-4 dark:font-white">
                <p className="text-gray-700 text-base dark:text-white">
                Balancing Chemical Equations:
                <br/><br/>
                Balancing chemical equations ensures that the same number of atoms of each element is present on both sides of the equation. This obeys the law of conservation of mass.
                For example, the balanced equation for the combustion of methane (CH4) in oxygen (O2) is CH4 + 2O2 → CO2 + 2H2O.
                <br/><br/>
                Mole Concept:

                The mole is a fundamental unit in chemistry that represents the amount of substance. Avogadro's number (6.022 x 10^23) is the number of atoms, ions, or molecules in one mole of a substance.
                Molar mass is the mass of one mole of a substance in grams, and it is numerically equal to the molecular weight.
                <br/><br/>
                Stoichiometry Calculations:

                Stoichiometry involves calculations to determine the amount of reactants needed or products formed in a chemical reaction.
                Using the mole concept and balanced chemical equations, stoichiometric calculations can be performed to find mass, moles, or volume relationships in reactions.
                <br/><br/>
                Limiting Reactant and Percent Yield:

                The limiting reactant is the reactant that limits the amount of product formed in a reaction. It is determined by comparing the stoichiometric ratios of reactants.
                Percent yield is a measure of how efficiently a reaction produces the expected amount of product and is calculated as (actual yield / theoretical yield) x 100%.
                </p>
            </div>
      </div>
      <br/><br/>
      <div
        className="rounded overflow-hidden shadow-lg border border-gray-300 relative"
        style={{ backgroundImage: "url(your-image-url.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-gray-400 text-black  font-black px-10 py-2">
          <h3 className="font-bold text-2xl mb-2 dark:text-black">Content</h3>
          <hr></hr>
        </div>

            {/* <div className="px-10 py-4">
                <p className="text-gray-700 text-base dark:text-white">
                Chemical reactions involve the transformation of reactants 
                into products through the breaking and forming of chemical 
                bonds. Stoichiometry is the quantitative study of the 
                relationships between reactants and products in a chemical 
                reaction.
                </p>
            </div> */}


            <div className="px-10 py-4 dark:font-white">
                <p className="text-gray-700 text-base dark:text-white">
                Chemical Reactions:
                <br/><br/>
                Definition: Chemical reactions involve the breaking of bonds in reactant molecules and the formation of new bonds to produce products with different chemical compositions. These reactions follow the law of conservation of mass, meaning that atoms are neither created nor destroyed; they are rearranged during reactions.
                <br/><br/>
                Types of Reactions: Chemical reactions can be classified into several categories, including synthesis, decomposition, combustion, single replacement, and double replacement reactions.
                <br/><br/>
                Balancing Chemical Equations:
                <br/><br/>
                Importance: Balancing chemical equations is a crucial step in understanding and quantifying chemical reactions. It ensures that the same number of each type of atom is present on both sides of the equation, adhering to the law of conservation of mass.
                Process: Balancing equations involves adjusting coefficients (whole numbers) in front of chemical formulas to achieve a balanced equation. The coefficients represent the relative amounts of each substance involved in the reaction.
                Example: In the combustion of methane (CH4) in oxygen (O2), the balanced equation is CH4 + 2O2 → CO2 + 2H2O.
                <br/><br/>
                The Mole Concept:
                <br/><br/>
                Definition: The mole is a unit of measurement used in chemistry to express the amount of a substance. One mole of any substance contains Avogadro's number (6.022 x 10^23) of atoms, molecules, or formula units.
                Molar Mass: Molar mass is the mass of one mole of a substance and is expressed in grams per mole (g/mol). It is numerically equal to the atomic or molecular weight.
                Avogadro's Number: Avogadro's number allows chemists to connect the microscopic world of atoms and molecules to macroscopic measurements in the laboratory.
                <br/><br/>
                Stoichiometric Calculations:

                Purpose: Stoichiometry is the branch of chemistry that deals with the quantitative relationships between reactants and products in chemical reactions. It allows chemists to predict the amounts of substances involved.
                Stoichiometric Ratios: Stoichiometric calculations are based on the stoichiometric ratios provided by a balanced chemical equation. These ratios establish the molar relationships between reactants and products.
                <br/><br/>
                Types of Stoichiometric Calculations:
                <br/><br/>
                Mass-Mass Calculations: Calculating the mass of a product formed or reactant consumed based on the given masses of other substances and the balanced equation.
                Mole-Mole Calculations: Determining the number of moles of one substance from the number of moles of another substance in the reaction.
                Volume-Volume Calculations: For reactions involving gases, the ideal gas law can be used to relate volumes of reactants and products.
                <br/><br/>
                Limiting Reactant and Percent Yield:
                <br/><br/>
                Limiting Reactant: The limiting reactant in a chemical reaction is the reactant that is completely consumed and determines the maximum amount of product that can be formed. It is identified by comparing the stoichiometric ratios of reactants.
                Percent Yield: The percent yield is a measure of how efficiently a chemical reaction produces the expected amount of product. It is calculated as the ratio of the actual yield (the amount obtained in the laboratory) to the theoretical yield (the amount calculated from stoichiometry), multiplied by 100%.
                <br/><br/>
                Applications:
                <br/><br/>
                Chemical Industry: Stoichiometry is crucial in chemical manufacturing processes for determining reactant quantities, product yields, and production efficiency.
                <br/>
                Environmental Analysis: Understanding stoichiometry helps in studying chemical reactions in environmental processes, such as pollutant degradation and waste treatment.
                <br/>
                Pharmaceuticals: In drug manufacturing, stoichiometry is used to calculate the precise amounts of reactants needed to produce pharmaceutical compounds.
                Education and Research: Stoichiometry is a fundamental concept taught in chemistry education and is applied extensively in chemical research.
                <br/><br/>
                In summary, chemical reactions and stoichiometry are central to understanding how substances interact and transform in chemistry. They provide the tools necessary for quantifying reactions, predicting product formation, and optimizing chemical processes in various fields, from industry to environmental science.
                </p>
            </div>
      </div>
      </Card>
    </Layout>
  );
};

export default Tutorials;