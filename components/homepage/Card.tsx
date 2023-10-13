'use client'
import React, { Component } from 'react';
import { CardTitle, CardDescription, Card, CardContent } from '../ui/card';
import Image from 'next/image';
//import Title from './Title';

const feedbackData = [
    {
      id: 1,
      userImage: '/assets/technology.jpg', // Replace with the image URL
      userName: 'John Doe',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
    {
      id: 2,
      userImage: '/assets/technology.jpg', // Replace with the image URL
      userName: 'Jane Smith',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
    {
      id: 3,
      userImage: '/assets/technology.jpg', // Replace with the image URL
      userName: 'Alice Johnson',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
  ];
class Cards extends Component{
    render(){
        return(

            <Card style={{ backgroundImage: `url('https://i.pinimg.com/originals/4f/50/3c/4f503caa958fc1dcaec66c0b60a6ebd1.jpg')` }} className='pt-6 bg-cover bg-no-repeat bg-fixed dark:bg-gray-700 bg-cover bg-center relative"'>

                <CardTitle className="dark:text-black text-2xl font-bold text-center">FEEDBACK</CardTitle>
                <CardDescription className="text-center dark:text-white">What are other learners saying.</CardDescription>
                
                <CardContent className='mt-4'>
                    <div className="mt-4 feedback-card-container bflex justify-center">
                        {feedbackData.map((feedback) => (
                            <div
                            key={feedback.id}
                            className=" border border-black transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:hover:shadow-2xl transition-transform dark:bg-gray-500 feedback-card mx-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transform transition-transform duration-200 hover:scale-105"
                            >
                            <div className="user-image">
                                <img src={feedback.userImage} alt={feedback.userName} />
                            </div>
                            <div className="user-info">
                                <h3 className='font-bold'>{feedback.userName}</h3>
                                <p>{feedback.feedbackText}</p>
                            </div>
                            </div>
                        ))}
                        <style jsx>{`
                            .feedback-card-container {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            }

                            .feedback-card {
                            border-radius: 8px;
                            margin: 10px;
                            padding: 20px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                            width: 100%;
                            transition: transform 0.2s ease-in-out;
                            }

                            .feedback-card:hover {
                            transform: scale(1.05);
                            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                            }

                            .user-image img {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            object-fit: cover;
                            }

                            .user-info {
                            margin-top: 10px;
                            }

                            h3 {
                            font-size: 1.2rem;
                            margin-bottom: 5px;
                            }

                            p {
                            font-size: 1rem;
                            }

                            @media (min-width: 640px) {
                            .feedback-card {
                                width: 45%;
                            }
                            }

                            @media (min-width: 768px) {
                            .feedback-card {
                                width: 30%;
                            }
                            }

                            @media (min-width: 1024px) {
                            .feedback-card {
                                width: 23%;
                            }
                            }

                            @media (min-width: 1280px) {
                            .feedback-card {
                                width: 20%;
                            }
                            }
                        `}</style>
                    </div>

                </CardContent>
            </Card>
                          
        );
    }
}

export default Cards;