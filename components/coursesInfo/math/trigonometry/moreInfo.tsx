'use client'
import React, { useState } from 'react';
import VideoPlayer from './videoPlayer';
import DescriptionContent from './descriptionContent';
import CurriculumContent from './curriculumContent';
import ReviewsContent from './reviewsContent';
import RelatedCourses from './relatedCourses';
import { PiNotebookBold } from 'react-icons/pi';
import { AiFillStar } from 'react-icons/ai';
import { FaRibbon } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import Footer from '@/components/homepage/Footer';

interface MoreInfoProps {
  userId: string;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ userId }) => {
  const videoSrc = "https://www.youtube.com/embed/5zi5eG5Ui-Y";
  const courseDuration = '5-8 hours';
  const courseName = 'Trigonometry'
  const courseDescription = 'This is a comprehensive course that covers Trigonometry in detail...';
  const userID = userId;
  const [activeTab, setActiveTab] = useState<'description' | 'curriculum' | 'reviews'>(
    'description'
  );

  const tabContents: Record<string, JSX.Element> = {
    description: <DescriptionContent />,
    curriculum: <CurriculumContent />,
    reviews: <ReviewsContent />,
  };

  const handleTabClick = (tab: 'description' | 'curriculum' | 'reviews') => {
    setActiveTab(tab);
  };

  const navigationCardStyle: React.CSSProperties = {
    padding: '8px 16px',
    cursor: 'pointer',
    border: '2px solid #ccc',
    borderRadius: '2px',
    marginRight: '10px',
    marginBottom: '10px',
    minWidth: '260px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: activeTab === 'description' ? 'gray' : 'transparent',
    color: activeTab === 'description' ? 'white' : 'black',
  };

  const navigationCardsStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
    color: 'white',
  };

  const tabContentStyle: React.CSSProperties = {
    marginTop: '16px',
  };

  const homePageContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    
  };

  const videoRelatedContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Stack the elements vertically
    alignItems: 'center', // Center the elements horizontally
    borderRadius: '10px',
    order: 1, // Change the order to 1 (default order is 0)
  };

  const navigationContainerStyle: React.CSSProperties = {
    flex: '1',
   marginRight: '16px',
    order: 2, // Change the order to 2 (default order is 0)
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '30px',
  };

  const headerImageStyle: React.CSSProperties = {
    width: '700px',
    height: '100%',
  };

  return (
    <Card>
       <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">TRIGONOMETRY CONTENT</CardTitle>
        <CardDescription>
          All the resource are available for you to utilize them,<br/>just one click away.
        </CardDescription>
      </CardHeader>
    <div style={homePageContainerStyle} className='mt-4'>
      
      <div style={navigationContainerStyle}>

        <div>
          <h1 style={headingStyle} className="">
            Unlock the Power of Equations: Join our Trigonometry Adventure!
          </h1>
          <img
           src="https://img.freepik.com/free-photo/learning-education-mathematics-calculation-teaching-concept_53876-167099.jpg?w=740&t=st=1692783658~exp=1692784258~hmac=b2de0eca6befa0ba474f6289ba6ed99daf5dacab891ca5bdc5aab1f8a849dd94"
            alt="Header Image"
            //style={{ width: '900px', borderRadius: '10px', height: '400px' }}
            className='rounded'
          />
        </div>

        <div style={navigationCardsStyle}>
          <div
            style={{
              ...navigationCardStyle,
            }}
            
            onClick={() => handleTabClick('description')}
          >
            <FaRibbon style={{ marginRight: '8px' }} />
            Description
          </div>
          <div
            style={{
              ...navigationCardStyle,
              backgroundColor: activeTab === 'curriculum' ? 'gray' : 'transparent',
              color: activeTab === 'curriculum' ? 'white' : 'black',
            }}
            onClick={() => handleTabClick('curriculum')}
          >
            <PiNotebookBold style={{ marginRight: '8px' }} />
            Curriculum
          </div>
          <div
            style={{
              ...navigationCardStyle,
              backgroundColor: activeTab === 'reviews' ? 'gray' : 'transparent',
              color: activeTab === 'reviews' ? 'white' : 'black',
            }}
            onClick={() => handleTabClick('reviews')}
          >
            <AiFillStar style={{ marginRight: '8px' }} />
            Reviews
          </div>
        </div>

          {activeTab && (
            <div style={tabContentStyle}>{tabContents[activeTab]}</div>
          )}
      </div>

      <div style={videoRelatedContainerStyle}>
        <div className="border-radius-4">
          <VideoPlayer
            src={videoSrc}
            courseDuration={courseDuration}
            courseDescription={courseDescription}
            courseName={courseName}
            userID={userID}
          />
          <div className="related-courses-container">
            {/* <RelatedCourses /> */}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </Card>
  );
};

export default MoreInfo;
