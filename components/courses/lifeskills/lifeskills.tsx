import React from 'react'
import { FaClock } from 'react-icons/fa';
import CoursesList from '../sidebar/courseListBar';
import { Card } from '@/components/ui/card';
import Layout from '../sidebar/layout';
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';

type Props = {}

const lifeskills = (props: Props) => {
  return (
    <Layout>
        <Card className="dark:bg-gray-950">
            <div className="container my-12 mx-auto px-4 md:px-12"  id="coursecard">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="block h-auto w-full" src="https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg?w=740&t=st=1691757527~exp=1691758127~hmac=5f4547805a9c5a427d96847b5df04ca96fb19613487d8281d34f688539582f0e" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                AI for education
                                                </span>
                                            </h1>
                                            
                                        </header>
                                        <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                        <div className="flex space-x-4">
                                            <Link href="/courses/moreInfo/math/algebra" className="flex-1">
                                                <Button className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                                                More Info
                                                </Button>
                                            </Link>

                                            {/* <Link href="../../../courses/units/math/algebra" className="flex-1">
                                                <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                                Start Learning
                                                </button>
                                            </Link> */}
                                        </div>

                                    </article>

                                </div>

                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/top-view-arrangement-with-different-emotions_23-2148860294.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Social & emotional learning
                                                </span>
                                            </h1>
                                            
                                        </header>
                                        <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                        <div className="flex space-x-4">
                                            <Link href="/courses/moreInfo/math/algebra" className="flex-1">
                                                <Button className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                                                More Info
                                                </Button>
                                            </Link>

                                            {/* <Link href="../../../courses/units/math/algebra" className="flex-1">
                                                <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                                Start Learning
                                                </button>
                                            </Link> */}
                                        </div>

                                    </article>

                                </div>

                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595835.jpg?w=740&t=st=1691758034~exp=1691758634~hmac=9c234e98ba5bdd613dd2306739a2a3f14c2f3e6db8a61dd11702f50f528e3071" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Internet Safety
                                                </span>
                                            </h1>
                                            
                                        </header>
                                        <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                        <div className="flex space-x-4">
                                            <Link href="/courses/moreInfo/math/algebra" className="flex-1">
                                                <Button className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                                                More Info
                                                </Button>
                                            </Link>

                                            {/* <Link href="../../../courses/units/math/algebra" className="flex-1">
                                                <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                                Start Learning
                                                </button>
                                            </Link> */}
                                        </div>

                                    </article>

                                </div>

                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/close-up-education-economy-objects_23-2149113525.jpg?w=740&t=st=1691758168~exp=1691758768~hmac=810b211062edbdb619c20bb9216e393f97fb51c28f5dc90c861c2600a14cd92d" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Personal finance
                                                </span>
                                            </h1>
                                            
                                        </header>
                                        <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                         <div className="flex space-x-4">
                                            <Link href="/courses/moreInfo/math/algebra" className="flex-1">
                                                <Button className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                                                More Info
                                                </Button>
                                            </Link>

                                            {/* <Link href="../../../courses/units/math/algebra" className="flex-1">
                                                <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                                Start Learning
                                                </button>
                                            </Link> */}
                                        </div>

                                    </article>

                                </div>

                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/mindset-opposite-positivity-negativity-thinking-concept_53876-122758.jpg?w=826&t=st=1691758244~exp=1691758844~hmac=001be27ddef932ea0d8ba61c7a5fc2cda011c6d92797f41831082d00bb10cad3" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Growth Mindset
                                                </span>
                                            </h1>
                                            
                                        </header>
                                        <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                        <div className="flex space-x-4">
                                            <Link href="/courses/moreInfo/math/algebra" className="flex-1">
                                                <Button className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                                                More Info
                                                </Button>
                                            </Link>

                                            {/* <Link href="../../../courses/units/math/algebra" className="flex-1">
                                                <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                                Start Learning
                                                </button>
                                            </Link> */}
                                        </div>

                                    </article>

                                </div>

                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/dark-skinned-woman-colleagues-corporate-start-up-office-working-finish-project-diverse-team-business-people-analyzing-company-financial-reports-from-computer_482257-7321.jpg?w=740&t=st=1691758321~exp=1691758921~hmac=38ac5cf7d145ed33f22082e1da09b6c174e13f5ad87ec616bc49affe8fca2c7f" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Entrepreneurship
                                                </span>
                                            </h1>
                                            
                                        </header>
                                        <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                         <div className="flex space-x-4">
                                            <Link href="/courses/moreInfo/math/algebra" className="flex-1">
                                                <Button className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                                                More Info
                                                </Button>
                                            </Link>

                                            {/* <Link href="../../../courses/units/math/algebra" className="flex-1">
                                                <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                                Start Learning
                                                </button>
                                            </Link> */}
                                        </div>

                                    </article>

                                </div>

                </div>
            </div>
        </Card>
    </Layout>
  )
}

export default lifeskills