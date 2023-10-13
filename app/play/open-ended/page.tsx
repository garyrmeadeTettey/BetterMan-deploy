import OpeEnded from '@/components/OpeEnded'
import { FC, Suspense } from 'react'
import { auth } from '@clerk/nextjs';
import Loading from '@/app/loading';

interface pageProps {
  userId: string;
}

const page: FC<pageProps> = async ({}) => {
  const {userId} = await auth()
  return <Suspense fallback={<Loading/>}><OpeEnded userId={userId}/></Suspense>
}

export default page