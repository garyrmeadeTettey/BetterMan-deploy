import React, { useEffect, useState } from 'react';
import { BiSolidTimeFive } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLanguage } from 'react-icons/md';
import { Button } from '../../../../components/ui/button';
import Link from 'next/link';
import { Card, CardDescription } from '../../../../components/ui/card';
import { dbPool } from '../../../../lib/db/index';
import { course } from '../../../../lib/db/schema';
import { eq, sql, and } from 'drizzle-orm';
import { Spinner } from '@/components/ui/spinner';

interface VideoPlayerProps {
  src: string;
  courseDuration: string;
  courseDescription: string;
  courseName: string;
  userID: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  courseDuration,
  courseDescription,
  courseName,
  userID
}) => {
  const duration = 'Duration: 3-4 weeks';
  const language = 'Language: English';
  const [enroll, setEnrolled] = useState<number>(0);
  const [enrolledNo, setEnrolledNo] = useState<number | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
  }

  const saveToDb = async () => {
    setIsLoading(true)
    try {
      await dbPool.insert(course).values({
        userId: userID,
        courseName: courseName,
        onChapter: 0,
        chapterLength: 4,
        progress: 0,
        isEnrolled: true,
        isComplete: false,
      });

      // Update the enrolled state when a user clicks
      setEnrolled((prevEnrolled) => prevEnrolled + 1);
      console.log("saved");
    } catch (error) {
      console.error('Error saving to the database:', error);
      alert(error);
    }
  };

  useEffect(() => {
    const fetchEnrolledCount = async () => {
      try {
        const result = await dbPool
          .select({ count: sql<number>`count(${course.userId})` })
          .from(course)
          .where(eq(course.courseName, courseName));

        if (result.length > 0) {
          setEnrolledNo(result[0].count);
        }
      } catch (error) {
        console.error('Error fetching enrolled count:', error);
      }
    };

    const checkEnrollment = async () => {
      try {
        const userEnrollment = await dbPool
          .select({ isEnrolled: course.isEnrolled })
          .from(course)
          .where(and(eq(course.courseName, courseName), eq(course.userId, userID)));

        setIsEnrolled(userEnrollment.length > 0);
      } catch (error) {
        console.error('Error checking enrollment:', error);
      }
    };

    fetchEnrolledCount();
    checkEnrollment(); // Check enrollment status immediately

  }, [courseName, userID]);

  

  return (
    <Card className="border border-gray-300 p-4 flex flex-col items-start max-w-sm m-4">
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-64"
      ></iframe>
      <div className="mt-4">
        <CardDescription className="description-text">{courseDescription}</CardDescription>
        <div className="font-bold mt-2 flex items-center">
          <span className="text-blue-500 mr-2">
            <BiSolidTimeFive />
          </span>
          {duration}
        </div>
        <div className="font-bold mt-2 flex items-center">
          <span className="text-blue-500 mr-2">
            <BsFillPersonFill />
          </span>
          Enrolled: {enrolledNo === null ? '...' : enrolledNo} students
        </div>
        <div className="font-bold mt-2 flex items-center">
          <span className="text-blue-500 mr-2">
            <MdOutlineLanguage />
          </span>
          {language}
        </div>
      </div>
      <br />
      {isEnrolled ? (
        <Link href="/courses/units/math/trigonometry/unit1">
          <Button onClick={onSubmit}>  {isLoading ? <Spinner/> : "Continue"} </Button>
        </Link>
      ) : (
        <Button onClick={saveToDb}>  {isLoading ? <Spinner/> : "Enroll"} </Button>
      )}
    </Card>
  );
};

export default VideoPlayer;
