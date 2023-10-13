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
        <b className="text-5xl ml-4">Genetics and Heredity</b>
      </h1>
      <div className="flex flex-col items-start ml-4 mt-2 font-semibold ml-2">4 UNITS : 30 SKILLS </div><br></br>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-10 py-4">
          <div className="font-bold text-2xl mb-2 dark:text-gray-400">About this unit</div>
          <p className="text-gray-700 text-base dark:text-white">

            Genetics and heredity are captivating chapters in the story of 
            life on Earth. This topic&ldquo; &quot;Genetics and Heredity&ldquo;&quot; takes students
             on a journey into the world of inheritance, exploring the 
             mechanisms that shape an organism&apos;s traits and determine its 
             genetic makeup. It&apos;s a tale of genes, DNA, and the inheritance of
              characteristics from one generation to the next.

            In this topic, students embark on a quest to unravel the genetic 
            code that underpins the diversity of life. They dive deep into the
            microscopic realm of genes, molecules, and chromosomes, seeking 
            to understand how traits are passed from parents to offspring and
            how variations arise within populations.
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
                    Genetics is the study of how traits are passed from one 
                    generation to the next and how variations occur within populations. 
                    Heredity refers to the transmission of genetic information from 
                    parents to offspring.
                </p>
            </div>


            <div className="px-10 py-4 dark:font-white">
                <p className="text-gray-700 text-base dark:text-white">
                Key Concepts:
                <br/><br/>
                Genes: Genes are segments of DNA that contain instructions for making specific proteins. They determine an organism&apos;s traits, such as eye color, blood type, and height.
                <br/><br/>
                Inheritance: When organisms reproduce, they pass on their genes to their offspring. This transmission occurs through sexual reproduction (combining genes from two parents) or asexual reproduction (cloning).
                <br/><br/>
                Dominant and Recessive Traits: Some traits are dominant, meaning they will be expressed even if only one copy of the gene is present. Others are recessive and require two copies of the gene for expression.
                <br/><br/>
                Punnett Squares: Punnett squares are tools used to predict the probability of certain traits appearing in offspring based on the genetic makeup of the parents.
                <br/><br/>
                Genetic Variation: Genetic variation occurs through mutations (changes in DNA) and the reshuffling of genes during meiosis, leading to diversity within a species.
                <br/><br/>
                Understanding genetics and heredity helps explain why offspring resemble their parents, how genetic disorders occur, and how selective breeding can be used in agriculture and animal husbandry
                </p>
            </div>
        </div>
      
      </Card>
    </Layout>
  );
};

export default Tutorials;