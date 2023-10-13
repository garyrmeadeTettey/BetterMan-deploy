import { Chat } from '@/components/chat/Chat'
import { FC, Suspense } from 'react'
import Loading from '../loading'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <Suspense fallback={<Loading/>}>
    <Chat/>
    </Suspense>
  )
}

export default page