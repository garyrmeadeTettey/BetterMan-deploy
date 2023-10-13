'use client'
import React, { Suspense, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Cards from '@/components/homepage/Card';
import Hero from '@/components/homepage/Hero';
import Teacher from '@/components/homepage/Teachers';
import Values from '@/components/homepage/Value';
import Footer from '@/components/homepage/Footer';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Loading from '../loading';

const Homepage: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);
  const divRef4 = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const div1 = divRef1.current;
    const div2 = divRef2.current;
    const div3 = divRef3.current;
    const div4 = divRef4.current;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Check if div1 is in the viewport
    if (div1 && scrollY + windowHeight > div1.offsetTop) {
      controls1.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls1.start({ opacity: 0, y: 50, scale: 0.8 });
    }

    if (div2 && scrollY + windowHeight > div2.offsetTop) {
        controls2.start({ opacity: 1, y: 0, scale: 1 });
    } else {
        controls2.start({ opacity: 0, y: 50, scale: 0.8 });
    }

    if (div3 && scrollY + windowHeight > div3.offsetTop) {
        controls3.start({ opacity: 1, y: 0, scale: 1 });
    } else {
        controls3.start({ opacity: 0, y: 50, scale: 0.8 });
    }

    if (div4 && scrollY + windowHeight > div4.offsetTop) {
        controls4.start({ opacity: 1, y: 0, scale: 1 });
      } else {
        controls4.start({ opacity: 0, y: 50, scale: 0.8 });
      }
    // Similar checks for div2, div3, and div4
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial animation check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Suspense fallback={<Loading/>}>
    <>
     <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">WELCOME TO BETTER-MAN</CardTitle>
                <CardDescription>
                    The best and simple online learning platform.
                </CardDescription>
            </CardHeader>
    <div className="flex flex-col items-center justify-center min-h-full py-10">
      <motion.div
        ref={divRef1}
        className=" mb-8 h-full rounded-lg w-full mb-8"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={controls1}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>
   
      <motion.div
        ref={divRef2}
        className=" h-full rounded-lg w-full mb-8"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={controls2}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
         <Values />
      </motion.div>

      <motion.div
        ref={divRef3}
        className=" h-full rounded-lg w-full mb-8"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={controls3}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
       <Cards />
      </motion.div>

      <motion.div
        ref={divRef4}
        className=" h-full rounded-lg w-full"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={controls4}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
       <Teacher />
      </motion.div>
    </div>
    <Footer/>
    </>
    </Suspense>
  );
};

export default Homepage;
