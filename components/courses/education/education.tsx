import Link from 'next/link'
import React from 'react'
import { FaClock } from 'react-icons/fa';
import CoursesList from '../sidebar/courseListBar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '../sidebar/layout';

type Props = {}

const education = (props: Props) => {
  return (
    <Layout>
    <Card className='dark:bg-gray-950'>
    <div className="container my-12 mx-auto px-4 md:px-12" id="coursecard">

        <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/flat-lay-travel-set-with-compass-maps_23-2149554722.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                Geography
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
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-128059.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline font-bold dark:text-white hover:underline text-black">
                             Psychology
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
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/laptop-which-there-is-world-people-drawn_1232-288.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                Sociology
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
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/binoculars-magnifying-glass-map_23-2147770898.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                History
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
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_1150-9086.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                Philosophy
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
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/african-american-blogger-reviewing-studio-light-camera_482257-26748.jpg?w=900&t=st=1692786329~exp=1692786929~hmac=aea4e439bc7bf2b2717b04b16d897c0f86c98429cb255857de63b83c6632d76a" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                Media Studies
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

export default education