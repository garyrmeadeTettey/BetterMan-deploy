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
        <b className="text-4xl ml-4">The Periodic Table and Chemical Trends</b>
      </h1>
      <div className="flex flex-col items-start ml-4 mt-2 font-semibold ml-2">4 UNITS : 26 SKILLS </div><br></br>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <div className="font-bold text-2xl mb-2 dark:text-gray-400">About this unit</div>
          <p className="text-gray-700 text-base dark:text-white">
          The periodic table is one of the most iconic and fundamental
          tools in chemistry, serving as a systematic arrangement of chemical 
          elements based on their atomic number and properties. This comprehensive
          overview delves into the structure of the periodic table, the organization 
          of elements within it, and the important chemical trends that arise as a result.
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
              The periodic table is a systematic arrangement of elements based 
              on their atomic number and chemical properties. It is a crucial 
              tool for understanding the behavior of elements and predicting 
              their properties.
              </p>
            </div>

            <div className="px-10 py-4 dark:font-white">
            <p className="text-gray-700 text-base dark:text-white">
            Periods and Groups:
            <br/><br/>
            Periods are horizontal rows on the periodic table, and groups (or families) are vertical columns.
            Elements in the same group have similar chemical properties because they share the same number of valence electrons.
            <br/><br/>
            Periodic Trends:

            Atomic Radius: Atomic radius increases down a group and decreases across a period due to changes in effective nuclear charge.
            <br/><br/>
            Ionization Energy: Ionization energy (the energy required to remove an electron) increases across a period and decreases down a group.
            <br/><br/>
            Electronegativity: Electronegativity (the ability of an atom to attract electrons) follows a similar trend as ionization energy.
            <br/><br/>
            Chemical Properties and Reactivity:
            
            Elements in the same group often exhibit similar chemical reactivity due to their shared electron configurations.
            Noble gases in Group 18 are chemically inert because they have complete electron shells.
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
              The periodic table is a systematic arrangement of elements based 
              on their atomic number and chemical properties. It is a crucial 
              tool for understanding the behavior of elements and predicting 
              their properties.
              </p>
            </div> */}

            <div className="px-10 py-4 dark:font-white">
            <p className="text-gray-700 text-base dark:text-white">
            Structure of the Periodic Table:
            <br/><br/>
            Rows (Periods): The periodic table consists of rows known as "periods." There are seven periods in total, each representing a new energy level or electron shell for the elements.
            Columns (Groups or Families): Columns in the periodic table are called "groups" or "families." Elements within the same group share similar chemical properties due to their identical valence electron configurations.
            <br/><br/>
            Key Chemical Trends:
            <br/><br/>
            Atomic Radius:
            
            Trend: Atomic radius generally increases down a group and decreases across a period.
            <br/><br/>
            Explanation: As you move down a group, new electron shells are added, increasing the distance between the nucleus and valence electrons, leading to larger atomic radii. Conversely, moving across a period, effective nuclear charge increases, pulling electrons closer and reducing atomic radii.
            <br/><br/>
            Ionization Energy:

            Trend: Ionization energy (the energy required to remove an electron from an atom) increases across a period and decreases down a group.
            Explanation: Across a period, increasing effective nuclear charge makes it more difficult to remove an electron, requiring higher ionization energy. Down a group, electrons are farther from the nucleus and experience less attraction, leading to lower ionization energy.
            <br/><br/>
            Electronegativity:

            Trend: Electronegativity (the ability of an atom to attract electrons in a chemical bond) increases across a period and decreases down a group.
            Explanation: Similar to ionization energy, electronegativity increases across a period due to greater nuclear charge. Down a group, the larger atomic size and increased electron shielding reduce electronegativity.
            <br/><br/>
            Chemical Reactivity:

            Trend: Elements in the same group often exhibit similar chemical reactivity.
            Explanation: Elements in the same group have the same number of valence electrons, which determines their chemical behavior. For example, the alkali metals in Group 1 are highly reactive because they all have one valence electron that they readily lose to form a +1 ion.
            <br/><br/>
            Metallic and Nonmetallic Character:

            Trend: Elements on the left side of the periodic table tend to be metals, while those on the right side tend to be nonmetals.
            Explanation: Metals typically have low ionization energies, metallic luster, and are good conductors of heat and electricity. Nonmetals have higher ionization energies, are often brittle, and are poor conductors.
            <br/><br/>
            Applications:

            Predicting Element Properties: The periodic table allows scientists to predict the properties of elements based on their positions, aiding in material design and synthesis.
            <br/><br/>
            Chemical Bonding: Understanding periodic trends helps explain why and how atoms form chemical bonds.
            <br/><br/>
            Industrial Chemistry: Knowledge of periodic trends is vital in industries such as metallurgy, where the properties of elements are manipulated to create specific alloys.
            Environmental Science: Analyzing the behavior of elements in the periodic table can inform environmental studies, particularly in understanding pollutant behavior and chemical reactions in natural systems.
            <br/><br/>
            In summary, the periodic table is a foundational tool in chemistry that organizes elements based on atomic structure and properties. The trends observed across periods and groups offer valuable insights into element behavior, chemical reactivity, and material design, making it an indispensable resource for scientists and engineers in various fields.
            </p>
            </div>
      </div>
      </Card>
    </Layout>
  );
};

export default Tutorials;
