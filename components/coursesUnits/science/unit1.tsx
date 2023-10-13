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
        <b className="text-5xl ml-4">Structure and Function</b>
      </h1>
      <div className="flex flex-col items-start ml-4 mt-2 font-semibold ml-2">4 UNITS : 26 SKILLS </div><br></br>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <div className="font-bold text-2xl mb-2 dark:text-gray-400">About this unit</div>
          <p className="text-gray-700 text-base dark:text-white">
            The study of cells is a cornerstone of biology, providing a profound insight into the intricate workings of life itself. This topic -The Cell - Structure and Function- is an exploration of 
            the fundamental building blocks of living organisms. Cells are the 
            smallest functional units of life, and understanding their structure and 
            function is essential to comprehending the complexities of the biological 
            world.

            In this topic, students embark on a fascinating journey into the microscopic realm, where they will discover the remarkable diversity
            of cells, from the simplest, single-celled organisms to the highly
            specialized cells within the human body. The study of cells not 
            only unveils their physical structure but also unravels the 
            mysteries of how they operate, interact, and sustain life.

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
                The cell is the fundamental unit of life. It is the 
                smallest structure that exhibits all the characteristics of 
                living things. Cells vary in size and shape and can be found 
                in all living organisms, from single-celled bacteria to 
                complex multicellular organisms like humans. Understanding the
                structure and function of cells is essential in biology.
              </p>
            </div>

            <div className="px-10 py-4 dark:font-white">
              <p className="text-gray-700 text-base dark:text-white">
                  Cell Structure:
                  Cells have several key parts, including the cell membrane, cytoplasm, and genetic material. The cell membrane, or plasma membrane, surrounds the cell and controls what enters and exits it. The cytoplasm is a gel-like substance where many cellular processes occur. The genetic material can be in the form of DNA (deoxyribonucleic acid) in the nucleus for eukaryotic cells or free-floating in the cytoplasm for prokaryotic cells.
              </p>
            </div>

            <div className="px-10 py-4 dark:font-white">
            <p className="text-gray-700 text-base dark:text-white">
            Cell Function:
            Cells perform various functions to maintain life. These include:
            <br/><br/>
            1.Energy Production: Cells generate energy through processes like cellular respiration (in mitochondria) or photosynthesis (in chloroplasts, in plant cells).
            <br/><br/>
            2.Protein Synthesis: Cells make proteins through the process of transcription and translation. Proteins have numerous roles in the cell, from structural support to enzymes that facilitate chemical reactions.
            <br/><br/>
            3.Transport: Cells use their membranes to transport molecules like nutrients, ions, and waste products in and out of the cell.
            <br/><br/>
            4.Reproduction: Cells can divide through processes like mitosis (for growth and repair) and meiosis (for sexual reproduction).
            <br/><br/>
            Understanding the structure and function of cells is crucial because it forms the basis for comprehending how organisms grow, maintain themselves, and interact with their environment.
            </p>
            </div>
        </div>
      
      </Card>
    </Layout>
  );
};

export default Tutorials;
