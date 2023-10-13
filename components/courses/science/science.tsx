import Link from 'next/link'
import React from 'react'
import { FaClock } from 'react-icons/fa';
import CoursesList from '../sidebar/courseListBar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/courses/sidebar/layout';

type Props = {}

const science = (props: Props) => {
  return (
    <Layout>
        <Card className='dark:bg-gray-950'>
            <div className="container  mx-auto  md:px-12" id="coursecard">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <article className=" overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages rounded-x" src="https://img.freepik.com/free-photo/dna_1048-3281.jpg?w=740&t=st=1691760227~exp=1691760827~hmac=04268fc6f7a82e7ce02f6aff3d38c1e4796b35dc07cf4a203bad405160754e19" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Middle School Biology
                                                </span>
                                            </h1>
                                        
                                        </header>
                                    
                                        <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                        <div className="flex space-x-4">
                                            <Link href="/courses/moreInfo/science/middleSchoolBiology" className="flex-1">
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

<article className="overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

    <div>
        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/molecular-structure-molecular-structural-coding-illustration_1284-52871.jpg?w=740&t=st=1691761166~exp=1691761766~hmac=29c8def20f9e85dccdc352e8535b83818f21266b79f1086e26064aefda7025c5" />
    </div>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <span className="no-underline font-bold dark:text-white hover:underline text-black">
            Chemistry Library
            </span>
        </h1>
    </header>
    <ul><li><div  className='clockdisplay mb-2 ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>
    <div className="flex space-x-4">
        <Link href="/courses/moreInfo/science/chemistry" className="flex-1">
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

                                    <article className="overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/executive-with-light-bulb-surrounded-by-icons_1232-162.jpg?w=740&t=st=1691760409~exp=1691761009~hmac=071bab6700f0a1f507d5069573738cb60ec7d37a20200979eb75d97b8868a770" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Middle School physics
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

                                    <article className="overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/dna-closely_1048-2632.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=sph" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Highschool Biology
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

                                    <article className="overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg?w=900&t=st=1691760958~exp=1691761558~hmac=71a2151995617204c3938637902a84d064bfc5da43564e5990cc8b22af344ed7" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Health and medicine
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

                                    <article className="overflow-hidden rounded-lg shadow-lg border-opacity-10 px-6 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl transition-transform">

                                        <div>
                                            <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/atomic-science-technology-background-vector-border-blue-neon-style-with-blank-space_53876-125999.jpg?w=740&t=st=1691761240~exp=1691761840~hmac=0cf131c390c729a2f2aa3fc219777bc4a34f5709daf157989ad22f4c9ed5bad1" />
                                        </div>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <span className="no-underline font-bold dark:text-white hover:underline text-black">
                                                Physics Library
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

export default science