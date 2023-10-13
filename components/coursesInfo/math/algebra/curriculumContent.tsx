import React, { useState } from 'react';
import { PiNotebookBold } from 'react-icons/pi';
import { FiVideo } from 'react-icons/fi';
import { FiMusic } from 'react-icons/fi';
import { IoIosArrowUp } from 'react-icons/io';

const CurriculumContent = () => {
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);

  const cardStyle = 'border border-gray-300 dark:bg-gray-500 p-2 mb-2 cursor-pointer relative w-96 bg-white';
  const arrowStyle = 'absolute top-1/2 right-2 transform -translate-y-1/2 rotate-180';
  const contentStyle = 'border border-gray-300 p-2 block w-1000 radius-4';
  const contentItemStyle = 'flex items-center mb-2';
  const contentIconStyle = 'text-2xl mr-2';
  const contentDetailsStyle = 'flex items-center';
  const contentTitleStyle = 'font-bold m-0';
  const contentDurationStyle = 'ml-12 text-gray-500 font-bold';
  const pinkBackgroundStyle = 'bg-gray-300 text-white ml-2 font-bold';
  const weekStyle = 'font-bold flex items-center bg-white dark:bg-gray-950';

  return (
    <div className=''>
      <div
        className={weekStyle}
        onClick={() => setSelectedWeek(selectedWeek === 'week1' ? null : 'week1')}
      >
        <div className={cardStyle}>Week 1</div>
        <span className={arrowStyle}><IoIosArrowUp /></span>
      </div>
      {selectedWeek === 'week1' && (
        <div className={contentStyle}>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><PiNotebookBold /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Reading: Introduction to Algebra</p>
              <p className={contentDurationStyle}>45 minutes</p>
              <p className={pinkBackgroundStyle}>2 topics</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><PiNotebookBold /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Reading: Solving Linear Equations</p>
              <p className={contentDurationStyle}>35 minutes</p>
              <p className={pinkBackgroundStyle}>3 topics</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><PiNotebookBold /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Reading: Graphing Linear Equations</p>
              <p className={contentDurationStyle}>50 minutes</p>
              <p className={pinkBackgroundStyle}>2 topics</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><PiNotebookBold /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Reading: Systems of Linear Equations</p>
              <p className={contentDurationStyle}>50 minutes</p>
              <p className={pinkBackgroundStyle}>2 topics</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><FiVideo /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Video: Intro to Algebra</p>
              <p className={contentDurationStyle}>1 Hour</p>
            </div>
          </div>
          {/* <div className={contentItemStyle}>
            <span className={contentIconStyle}><FiMusic /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Audio: Interactive lesson</p>
              <p className={contentDurationStyle}>45 minutes</p>
              <p className={pinkBackgroundStyle}>3 questions</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><PiNotebookBold /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Reading: Linear Equations</p>
              <p className={contentDurationStyle}>55 minutes</p>
            </div>
          </div> */}
        </div>
      )}

      {/* <div
        className={weekStyle}
        onClick={() => setSelectedWeek(selectedWeek === 'week2' ? null : 'week2')}
      >
        <div className={cardStyle}>Week 2</div>
        <span className={arrowStyle}><IoIosArrowUp /></span>
      </div>
      {selectedWeek === 'week2' && (
        <div className={contentStyle}>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><PiNotebookBold /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Reading: Functions Fundamentals</p>
              <p className={contentDurationStyle}>55 minutes</p>
              <p className={pinkBackgroundStyle}>3 questions</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><FiVideo /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Video: Graphical Representations</p>
              <p className={contentDurationStyle}>1 hour</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><FiMusic /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Audio: Common Types of Functions</p>
              <p className={contentDurationStyle}>45 minutes</p>
              <p className={pinkBackgroundStyle}>2 questions</p>
            </div>
          </div>
          <div className={contentItemStyle}>
            <span className={contentIconStyle}><FiVideo /></span>
            <div className={contentDetailsStyle}>
              <p className={contentTitleStyle}>Video: Operations on Functions</p>
              <p className={contentDurationStyle}>45 minutes</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CurriculumContent;
