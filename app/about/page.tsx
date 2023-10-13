import React, { Suspense } from 'react'
import AboutPage from '@/components/about/about'
import Loading from '../loading'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <AboutPage/>
        </Suspense>
    </div>
  )
}

export default About