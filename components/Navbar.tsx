"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { LogIn } from 'lucide-react';
import Image from 'next/image';
import { ArrowRight, ChevronRightCircleIcon, ChevronLeftCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation'

const Navbar = () => {
  const { user } = useUser();
  const isAuth = !!user;
  const [toggleViewMode, setToggleViewMode] = useState(false);

  const router = useRouter();

  const handleLeftButtonClick = () => {
    router.back();
  };

  const handleRightButtonClick = () => {
    router.forward();
  };

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-10 h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center"> {/* This div is used for centering */}
              <Image
                className="float-left mr-2"
                src="/assets/open-book.png" // Use relative path
                width={50}
                height={100}
                alt="loading"
              />
              <p className="rounded-lg border-2 border-b-2 border-r-4 flex nr-2 border-black px-2 py-1 text-xl font-bold dark:border-white transition-all hover:translate-y-0.5">
                BetterMan
              </p>
            </div>
          </Link>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            /* Hide the paragraph and adjust image styles on smaller screens */
            .flex div p {
              display: none;
            }
            .flex div .float-left {
              margin-right: 0;
            }
          }
        `}</style>

        {/* Links on Larger Screens */}
        <ul className={`md:flex space-x-4 ${toggleViewMode ? 'hidden' : 'flex'}`} onClick={() => setToggleViewMode(false)}>
        <li>
          <p onClick={handleLeftButtonClick} className="text-gray-700 hover:text-gray-200 dark:text-gray-300 dark:hover:text-gray-600 transition duration-300"><ChevronLeftCircleIcon/></p>
        </li>
          <li>
            <Link href="/courses">
              <p className="text-gray-700 hover:text-gray-200 dark:text-gray-300 dark:hover:text-gray-600 transition duration-300">Courses</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-gray-800 hover:text-gray-200 dark:text-gray-300 dark:hover:text-gray-600 transition duration-300">About</p>
            </Link>
          </li>
          <li>
          <p onClick={handleRightButtonClick} className="text-gray-700 hover:text-gray-200 dark:text-gray-300 dark:hover:text-gray-600 transition duration-300"><ChevronRightCircleIcon/></p>
        </li>
        </ul>

        {/* Button on Smaller Screens */}
        <div className={`md:hidden ${toggleViewMode ? 'block' : 'hidden'} mt-4`}>
          <Button onClick={() => setToggleViewMode(!toggleViewMode)}>
            <i className='fa fa-bars'></i>
          </Button>
        </div>
        <div className="flex items-center">
          <ThemeToggle className="mr-4" />
          <div className="flex items-center">
            {isAuth ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
