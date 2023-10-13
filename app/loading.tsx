'use client'
import LoadingSkeleton from '@/components/LoadingSkeleton';
import React, { useState, useEffect } from 'react';

function YourComponent() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Use setTimeout to hide the loader after 5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div>
        {/* Your LoadingQuestions component */}
        <LoadingSkeleton finished={false} />
      </div>
    );
  }

}

export default YourComponent;
