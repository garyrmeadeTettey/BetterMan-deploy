import React, { Suspense } from 'react'
import Feedback from '@/components/feedback/feedback'
import Loading from '../loading'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Feedback/>
      </Suspense>
    </div>
  )
}

export default page