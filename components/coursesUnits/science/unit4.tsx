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
        <b className="text-4xl ml-4">Ecosystems and Biodiversity</b>
      </h1>
      <div className="flex flex-col items-start ml-4 mt-2 font-semibold ml-2">4 UNITS : 26 SKILLS </div><br></br>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <div className="font-bold text-2xl mb-2 dark:text-gray-400">About this unit</div>
          <p className="text-gray-700 text-base dark:text-white">
            Ecosystems are the intricate tapestries of life that encompass 
            our planet. In the captivating topic of &quot;Ecosystems and
            Biodiversity&ldquo; &quot; students embark on a journey into the web of life, 
            where they&apos;ll discover the dynamic interactions between living 
            organisms and their environments. It&apos;s a journey that unravels the
             mysteries of Earth&apos;s diverse habitats and the multitude of 
             species that call them home.

            In this topic, students explore ecosystems, from the lush 
            rainforests to the barren deserts, and the incredible array of 
            life they support. They delve into the concept of biodiversity, 
            which encompasses the variety of species, ecosystems, and genetic 
            diversity present on Earth. Understanding ecosystems and 
            biodiversity is crucial in appreciating the interconnectedness of
            all living things and the vital services ecosystems provide.
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
                Ecosystems are complex, interconnected communities of living 
                organisms and their environments. Biodiversity refers to the variety 
                of life within an ecosystem, including the 
                different species of plants, animals, and microorganisms.
              </p>
            </div>


            <div className="px-10 py-4 dark:font-white">
            <p className="text-gray-700 text-base dark:text-white">
            Components of an Ecosystem: Ecosystems consist of biotic (living) and abiotic (non-living) components. Biotic components include producers (plants), consumers (animals), and decomposers (bacteria and fungi). Abiotic components include soil, water, temperature, and climate.
            <br/><br/>
            Food Chains and Food Webs: Ecosystems are organized into food chains and food webs, which show the flow of energy and matter through different trophic levels. Producers capture energy from the sun, and consumers transfer energy by consuming other organisms.
            <br/><br/>
            Energy Pyramids: Energy pyramids illustrate the decreasing amount of energy available at each trophic level, with the greatest energy at the producer level and progressively less energy at higher levels.
            <br/><br/>
            Biodiversity: Biodiversity is important for the stability and resilience of ecosystems. It provides opportunities for species to adapt and ensures that ecosystems can continue to provide essential services, such as clean air and water.
            <br/><br/>
            Human Impact: Human activities, such as deforestation, pollution, and habitat destruction, can have detrimental effects on ecosystems and lead to biodiversity loss.
            <br/><br/>
            Understanding ecosystems and biodiversity is crucial for conserving natural habitats, managing resources sustainably, and addressing environmental challenges. It also highlights the interconnectedness of all living organisms on Earth.
            </p>
            </div>
        </div>
      
      </Card>
    </Layout>
  );
};

export default Tutorials;
