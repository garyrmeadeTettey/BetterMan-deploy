import React, { Component } from 'react';
//import Title from "./Title";
import { CardTitle, CardDescription } from "../ui/card";
import Link from 'next/link';

const Teacher = () => {
  return (

    <div className='mt-8'>
    
        <div className="mx-auto mt-4 max-w-6xl text-center p-3">

            <CardTitle className="text-2xl font-bold text-center">EXPLORE 50+ ONLINE</CardTitle>
            <CardDescription className="text-center">Utilize all the available resources within our platform.</CardDescription>

            <div className="mt-8 gr mx-auto max-w-1xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-6 sm:text-center">

               
                <span className="flex dark:hover:bg-gray-300 w-full items-center rounded-xl border border-black border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">
                    <Link href="/courses/science">
                    <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src="../assets/chemistry.png" alt="Framework7" />
                    <div>
                    <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Science</div>
                    <div className="text-sm opacity-75">25+ Courses</div>
                    </div>
                    </Link>
                </span>
            

                
                <span className="flex  w-full items-center rounded-xl border border-black border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">
                    <Link href="/courses/technology">
                    <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src="../assets/server.png" alt="Framework7" />
                    <div>
                    <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Technology</div>
                    <div className="text-sm opacity-75">25+ Courses</div>
                    </div>
                    </Link>
                </span>
                

               
               <span className="flex  w-full items-center rounded-xl border border-black border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">
                    <Link href="/courses/education">
                    <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src="../assets/coaching.png" alt="Framework7" />
                    <div>
                    <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Education</div>
                    <div className="text-sm opacity-75">25+ Courses</div>
                    </div>
                    </Link>
                </span>
              

              
               <span className="flex  w-full items-center rounded-xl border border-black border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">
                    <Link href="/courses">
                    <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src="../assets/tools.png" alt="Framework7" />
                    <div>
                    <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Mathematics</div>
                    <div className="text-sm opacity-75">25+ Courses</div>
                    </div>
                    </Link>
                </span>
              
            
            </div>
        </div>
    
    </div>

);
};

export default Teacher;