// import React from 'react';
// import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
// import Footer from '../homepage/Footer';

// const About = () => {
//   return (
//     <Card className="bg-gray-100">
//         <CardHeader className="text-center">
//             <CardTitle className="text-2xl font-bold">About BetterMan - Your Gateway to Modern Education</CardTitle>
//             <CardDescription>
//                 Share your feedback and help us improve.
//             </CardDescription>
//         </CardHeader>

//       <div className="container mx-auto px-4">
        
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="mb-4 md:mb-0">
//             <img
//               src="/loading.gif"
//               alt="BetterMan Logo"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div>
//             <p className="text-lg text-gray-600 leading-loose">
//               BetterMan is an innovative online platform that is revolutionizing
//               the way people access educational resources. We believe that
//               education should be accessible to all, and our mission is to make
//               modern educational resources available at just a click.
//             </p>
//             <p className="text-lg text-gray-600 leading-loose mt-4">
//               Whether you are a student looking to enhance your skills, a
//               professional seeking career advancement, or simply someone eager
//               to learn, BetterMan has you covered. We offer a wide range of
//               courses, tutorials, and learning materials across various
//               subjects and industries.
//             </p>
//             <p className="text-lg text-gray-600 leading-loose mt-4">
//               Our platform is designed to be user-friendly, providing you with an
//               intuitive learning experience. With BetterMan, you can gain
//               knowledge and skills at your own pace, anytime and anywhere.
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </Card>
//   );
// };

// export default About;

'use client'
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import Footer from '../homepage/Footer';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
const feedbackData = [
    {
      id: 1,
      userImage: '/assets/people.png', // Replace with the image URL
      userName: 'Joe Moe',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
    {
      id: 2,
      userImage: '/assets/people.png', // Replace with the image URL
      userName: 'Jane Smith',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
    {
      id: 3,
      userImage: '/assets/people.png', // Replace with the image URL
      userName: 'Alice Johnson',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
  ];
const About = () => {
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  
  const slideUpAnimation = {
    initial: { y: 100 },
    animate: { y: 0 },
  };

  return (
    <Card className="bg-gray-100 dark:bg-gray-950 dark:text-white">
        <CardHeader className="text-center">
            <motion.div {...fadeInAnimation}>
              <CardTitle className="text-2xl font-bold">About BetterMan - Your Gateway to Modern Education</CardTitle>
             </motion.div>
             <motion.div {...fadeInAnimation}>
             <CardDescription>
                Share your feedback and help us improve.
             </CardDescription>
             </motion.div>
         </CardHeader>
      <div className="flex mb-8 flex-col mt-4 items-center justify-center container mx-auto px-4">
        
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div {...slideUpAnimation} className="mb-4 md:mb-0 order-2 md:order-1">
          <p className="text-lg text-gray-600 leading-loose dark:text-gray-300">
            BetterMan is an innovative online platform that is revolutionizing
            the way people access educational resources. We believe that
            education should be accessible to all, and our mission is to make
            modern educational resources available at just a click.
          </p>
          <p className="text-lg text-gray-600 leading-loose mt-4 dark:text-gray-300">
            Whether you are a student looking to enhance your skills, a
            professional seeking career advancement, or simply someone eager
            to learn, BetterMan has you covered. We offer a wide range of
            courses, tutorials, and learning materials across various
            subjects and industries.
          </p>
          <p className="text-lg text-gray-600 leading-loose mt-4 dark:text-gray-300">
            Our platform is designed to be user-friendly, providing you with an
            intuitive learning experience. With BetterMan, you can gain
            knowledge and skills at your own pace, anytime and anywhere.
          </p>
        </motion.div>
      <div style={{ backgroundImage: `url('/assets/about.jpg')` }} className='sm:bg-cover sm:bg-contain mpt-6 bg-no-repeat bg-center rounded-sm dark:bg-gray-700 bg-cover bg-center relative"'>

  </div>
</div>

        <motion.div {...slideUpAnimation} className="mt-16">
        <CardTitle className="text-2xl text-center font-bold">Join Our Community</CardTitle>
          <p className="text-lg text-sm text-gray-600 leading-loose dark:text-gray-300 mt-4 ">
            Become a part of the BetterMan community. Connect with us, and enhance your
            your knowledge in the most simplest way, and stay updated with the latest educational
            content and events by joining our online forum and taking advantage of what is we bring to you as BetterMan.
          </p>
          <br/>
          <Link href="/courses">
          <Button variant="outline" className='dark:border-white darK:hover:bg-gray-400 border border-black hover:bg-gray-400'>
            Access Resources
            </Button>
            </Link>
        <Card style={{ backgroundImage: `url('https://i.pinimg.com/originals/4f/50/3c/4f503caa958fc1dcaec66c0b60a6ebd1.jpg')` }} className='pt-6 bg-cover bg-no-repeat bg-fixed dark:bg-gray-700 mt-8 bg-cover bg-center relative"'>

            <CardTitle className="dark:text-black text-2xl font-bold text-center">FEEDBACK</CardTitle>
            <CardDescription className="text-center dark:text-white">What are other learners saying.</CardDescription>


            <CardContent className='mt-4'>
                <div className="mt-4 feedback-card-container bflex justify-center">
                    {feedbackData.map((feedback) => (
                        <div
                        key={feedback.id}
                        className=" border border-black transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:hover:shadow-2xl transition-transform dark:bg-gray-500 feedback-card mx-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transform transition-transform duration-200 hover:scale-105"
                        >
                        <div className="user-image">
                            <img src={feedback.userImage} alt={feedback.userName} />
                        </div>
                        <div className="user-info">
                            <h3 className='font-bold'>{feedback.userName}</h3>
                            <p>{feedback.feedbackText}</p>
                        </div>
                        </div>
                    ))}
                    <style jsx>{`
                        .feedback-card-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        }

                        .feedback-card {
                        border-radius: 8px;
                        margin: 10px;
                        padding: 20px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        width: 100%;
                        transition: transform 0.2s ease-in-out;
                        }

                        .feedback-card:hover {
                        transform: scale(1.05);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                        }

                        .user-image img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        object-fit: cover;
                        }

                        .user-info {
                        margin-top: 10px;
                        }

                        h3 {
                        font-size: 1.2rem;
                        margin-bottom: 5px;
                        }

                        p {
                        font-size: 1rem;
                        }

                        @media (min-width: 640px) {
                        .feedback-card {
                            width: 45%;
                        }
                        }

                        @media (min-width: 768px) {
                        .feedback-card {
                            width: 30%;
                        }
                        }

                        @media (min-width: 1024px) {
                        .feedback-card {
                            width: 23%;
                        }
                        }

                        @media (min-width: 1280px) {
                        .feedback-card {
                            width: 20%;
                        }
                        }
                    `}</style>
                </div>

            </CardContent>
        </Card>
        </motion.div>
        
        <div className="mt-8">
        
          <p className="text-sm text-gray-600 leading-loose">
            Have questions or feedback? Feel free to reach out to our team at{' '}
            <a
              href="mailto:contact@betterman.com"
              className="text-blue-500 hover:underline"
            >
              contact@betterman.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer/>
    </Card>
  );
};

export default About;
