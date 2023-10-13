import React, { Suspense } from 'react';
import Questions from '@/components/Questions';
import { auth } from '@clerk/nextjs';
import Loading from '../loading';

type Props = {
  userId: string; // Use 'userId' instead of 'userID'
};

function SearchBarFallback() {
  return <>placeholder</>;
}

const Page: React.FC<Props> = async (props: Props) => {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div>
      {/* <Suspense fallback={<SearchBarFallback />}>
        <Questions />
      </Suspense> */}
      <Suspense fallback={<Loading/>}><Questions userId={userId} /></Suspense> {/* Use 'userId' prop here */}
    </div>
  );
};

export default Page;
