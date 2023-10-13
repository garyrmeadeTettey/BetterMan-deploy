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

interface MoreInfoProps {}

const MoreInfo: React.FC<MoreInfoProps> = () => {
  const videoSrc = "https://www.youtube.com/embed/Q8ijKtdIRMQ";
  const courseDuration = '2-5 hours';
  const courseDescription = 'This is a comprehensive course that covers Biology in detail...';

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
    borderRadius: '10px'
  };

  const navigationContainerStyle: React.CSSProperties = {
    flex: '1',
    marginLeft: '16px',
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
        <CardTitle className="text-2xl font-bold">MIDDLE-SCHOOL BIOLOGY CONTENT</CardTitle>
        <CardDescription>
          All the resource are available for you to utilize them,<br/>just one click away.
        </CardDescription>
      </CardHeader>
    <div style={homePageContainerStyle} className='mt-4'>
      
      <div style={navigationContainerStyle}>

        <div style={headerImageStyle}>
          <h1 style={headingStyle} className="">
            Unlock the Power of Equations: Join our Biology Adventure!
          </h1>
          <img
            src="https://img.freepik.com/free-photo/dna_1048-3281.jpg?w=740&t=st=1691760227~exp=1691760827~hmac=04268fc6f7a82e7ce02f6aff3d38c1e4796b35dc07cf4a203bad405160754e19"
            alt="Header Image"
            style={{ width: '900px', borderRadius: '10px', height: '400px' }}
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
          />
          <div className="related-courses-container">
            {/* <RelatedCourses /> */}
          </div>
        </div>
      </div>
    </div>
    </Card>
  );
};

export default MoreInfo;
