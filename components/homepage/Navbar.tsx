'use client'
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BsPersonFill, BsList, BsXLg } from "react-icons/bs";

import Header from './Header';


const Navbar = () => {

  const [toggleViewMode, setToggleViewMode] = useState(false);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/SinglePages/Profile');
  };

  return (
    <div>

      <div className='bg-[#ffffff33] header'>
        <nav className='flex items-center justify-between px-4 py-2'>

          <ul className={`flex ${toggleViewMode ? 'hidden' : 'flex'} space-x-4`} onClick={() => setToggleViewMode(false)}>
            <li>
              <Link href="/" className='text-gray-800 hover:text-blue-500 transition duration-300'>Home</Link>
            </li>
            <li>
              <Link href="/CoursesPage/Math/MathCourse" className='text-gray-800 hover:text-blue-500 transition duration-300'>Courses</Link>
            </li>
          </ul>

          <div className='start-bar' onClick={handleButtonClick}>
            <i className="icon font-bold hover:text-gray-800 cursor-pointer"><BsPersonFill /></i>
          </div>

          <button
            className='font-bold rounded-full hover:text-gray-800 toggle-bar focus:outline-none'
            onClick={() => setToggleViewMode(!toggleViewMode)}
          >
            {toggleViewMode ? <i className='fa fa-times'><BsXLg /></i> : <i className='fa fa-bars'><BsList /></i>}
          </button>
        </nav>
      </div>

  
    </div>
           
  )
}

export default Navbar;