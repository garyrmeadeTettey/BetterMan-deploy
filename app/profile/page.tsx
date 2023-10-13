import Profile from '@/components/Profile';
import { auth } from '@clerk/nextjs';
import { FC, Suspense } from 'react'
import Loading from '../loading';

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {
    const { userId } = await auth();
    const isAuth = !!userId;

  return (
    <Suspense fallback={<Loading/>}>
    <Profile/>
    </Suspense>
  )
}

export default page