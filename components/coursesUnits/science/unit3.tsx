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
        <b className="text-4xl ml-4">Photosynthesis and Cellular Respiration</b>
      </h1>
      <div className="flex flex-col items-start ml-4 mt-2 font-semibold ml-2">4 UNITS : 26 SKILLS </div><br></br>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <div className="font-bold text-2xl mb-2 dark:text-gray-400">About this unit</div>
          <p className="text-gray-700 text-base dark:text-white">
            Photosynthesis and cellular respiration are the remarkable 
            processes that power life on our planet. In this captivating 
            topic-Photosynthesis and Cellular Respiration students embark 
            on a journey through the interconnected cycles of energy and 
            matter that sustain all living organisms. Its a journey into the
            heart of lifes energy dynamics.

            In this topic, students will explore how plants, the primary 
            producers of energy, capture sunlight and convert it into chemical
            energy through photosynthesis. Theyll then delve into cellular 
            respiration, the process by which all living organisms, including
            plants, release the stored energy from food molecules, providing
            the fuel necessary for growth, maintenance, and reproduction.


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
              Photosynthesis and cellular respiration are two fundamental 
              processes that sustain life on Earth. They involve the 
              conversion of energy and matter within cells.
              </p>
            </div>

            <div className="px-10 py-4 dark:font-white">
            <p className="text-gray-700 text-base dark:text-white">
                Photosynthesis:
                Photosynthesis is the process by which plants, algae, and some bacteria use sunlight, carbon dioxide, and water to produce glucose (a type of sugar) and oxygen. This process occurs in chloroplasts, which contain the pigment chlorophyll.
                <br/><br/>
                Cellular Respiration:
                Cellular respiration is the process by which cells break down glucose and oxygen to produce energy, carbon dioxide, and water. It takes place in the mitochondria of eukaryotic cells.
                <br/><br/>
                Relationship Between Photosynthesis and Cellular Respiration:
                These two processes are interrelated. The oxygen produced during photosynthesis is used in cellular respiration, and the carbon dioxide produced in respiration is used in photosynthesis. Together, they create a cycle that sustains life on Earth.
                <br/><br/>
                Understanding photosynthesis and cellular respiration is essential because they are central to energy flow in ecosystems and provide the energy needed for all life processes.
            </p>
            </div>
        </div>
      
      </Card>
    </Layout>
  );
};

export default Tutorials;
