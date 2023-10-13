'use client'
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Slideshow = () => {

    const imageData = [
      {
        src: '/assets/tech.jpg',
        title: 'Technology',
        paragraph: 'Software Engineer, Cyber Security ,and Data Anal...',
      },
      {
        src: '/assets/science.jpg',
        title: 'Science',
        paragraph: 'Biology, Chemistry, Environmental Sciences and ...',
      },
      {
        src: '/assets/edu.jpg',
        title: 'Education',
        paragraph: 'Language and Literacy, Physical and Philo ...',
      },
      {
        src: '/assets/math.jpg',
        title: 'Mathematics',
        paragraph: 'Algebra, Calculus, Geometry, Trigonometry and  ...',
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imageData.length);
      }, 3000); // Change slide every 5 seconds
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    const router = useRouter();

    const handleButtonClick = () => {
      router.push('./courses');
    };

    return (
        <div className="dark:bg-gray-700 flex justify-center items-center max-w-80 bg-opacity-50 bg-white rounded-md mt-14 p-[18%]">
          {imageData.map((data, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''} ml-8`}
            >
              <Image className='course-picture' quality={100} width={500} height={300} src={data.src} alt={`Slide ${index + 1}`} />
              <br/>
              <h2 className='mt-6 font-bold mr-4'>{data.title}</h2>
              <p>{data.paragraph}</p>
              <Link href='/courses'>
                <Button className='mt-4 dark:text-white bg-gray-900 dark:hover:bg-gray-400 dark:hover:text-black hover:bg-gray-500'>Learn more!</Button>
              </Link>
            </div>
          ))}
        </div>
      );
  };
    
export default Slideshow;