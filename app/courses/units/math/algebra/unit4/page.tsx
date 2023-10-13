import React from 'react';
import AlgebraUnits from '@/components/coursesUnits/math/algebra/unit4';
import { auth } from '@clerk/nextjs';

type Props = {};

const page = async (props: Props) => {
  // Define the current unit and total units based on your logic
  const currentUnit = 4; // Set the current unit to 4 for Unit 4
  const totalUnits = 4; // Set the total units to 4
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div>
      <AlgebraUnits userId={userId} currentUnit={currentUnit} totalUnits={totalUnits} />
    </div>
  );
};

export default page;
