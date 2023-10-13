// Import required modules
"use client"
// Import required modules
import React, { useEffect, useState } from 'react';
import { UserProfile, useUser } from "@clerk/nextjs";
import { dbPool } from '../lib/db/index';
import { course } from '../lib/db/schema';
import { and, eq, sql } from 'drizzle-orm';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from './ui/separator';
import Footer from './homepage/Footer';


// Define the Profile component
const Profile = () => {
  // Fetch user information
  const { isSignedIn, user, isLoaded } = useUser();
  const userId = course.userId; // Get the user's ID

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [inProgressCourses, setInProgressCourses] = useState([]);

  // Fetch enrolled courses
  const fetchEnrolledCourses = async () => {
    try {
      const enrolledCourses = await dbPool
        .select()
        .from(course)
        .where(and(eq(course.userId, userId), eq(course.isEnrolled, true)));
      setEnrolledCourses(enrolledCourses);
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
    }
  };

  // Fetch completed courses
  const fetchCompletedCourses = async () => {
    try {
      const completedCourses = await dbPool
        .select()
        .from(course)
        .where(and(eq(course.userId, userId), eq(course.isComplete, true)));
      setCompletedCourses(completedCourses);
    } catch (error) {
      console.error('Error fetching completed courses:', error);
    }
  };

  // Fetch in-progress courses
  const fetchInProgressCourses = async () => {
    try {
      const inProgressCourses = await dbPool
        .select()
        .from(course)
        .where(and(eq(course.userId, userId), eq(course.isEnrolled, true), eq(course.isComplete, false)));
      setInProgressCourses(inProgressCourses);
    } catch (error) {
      console.error('Error fetching in-progress courses:', error);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      // If the user is signed in, fetch course information
      fetchEnrolledCourses();
      fetchCompletedCourses();
      fetchInProgressCourses();
    }
  }, [isSignedIn]);

  if (!isLoaded) {
    // If user data is not loaded, return null
    return null;
  }

  if (isSignedIn) {
    // If the user is signed in, display the user's profile with course information
    return (
      <>
      <div className="flex  justify-center items-center">
      <Card className="bg-gray-100 p-4 w-[80%] mt-4 mb-4">
        <CardHeader className='mb-4'>
          <CardTitle className="text-2xl text-center font-bold">{user.fullName}&apos;s Profile</CardTitle>
          <CardDescription className="text-center">A full list of all your courses.</CardDescription>
        </CardHeader>
        {/* <div>
          <h2 className="text-xl font-semibold">Enrolled Courses</h2>
          <ul>
            {enrolledCourses.map((course) => (
              <li key={course.id}>{course.courseName}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Completed Courses</h2>
          <ul>
            {completedCourses.map((course) => (
              <li key={course.id}>{course.courseName}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">In-Progress Courses</h2>
          <ul>
            {inProgressCourses.map((course) => (
              <li key={course.id}>{course.courseName}</li>
            ))}
          </ul>
        </div> */}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Enrolled Courses</TableHead>
              <TableHead>Completed Courses</TableHead>
              <TableHead>In-Progress Courses</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">  {enrolledCourses.map((course) => (
                <h3 key={course.id}>{course.courseName}</h3>))}
                <Separator/>
              </TableCell>

              <TableCell> {completedCourses.map((course) => (
                <h3 key={course.id}>{course.courseName}</h3>))}
                <Separator/>
              </TableCell>

              <TableCell>{inProgressCourses.map((course) => (
                <h3 key={course.id}>{course.courseName}</h3>))}
                <Separator/>
              </TableCell>
            
            </TableRow>
          </TableBody>
        </Table>


        {/* You can add more profile information here */}
      </Card>
     
      </div>
       <Footer/>
      </>
    );
  }

  // If the user is not signed in, display a message
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Not signed in!</h1>
    </div>
  );
}

export default Profile;

