import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewsContent = () => {
  return (
    <div className="flex justify-between space-x-4">
      <div className="w-4/5 border border-gray-400 dark:bg-gray-950 p-4 bg-gray-100 mb-8">
        <h2 className="text-2xl font-bold mb-2">Reviews</h2>
        <div className="flex items-center mb-2">
          <p className="font-bold">5 stars</p>
          <div className="bg-gray-400 h-4 w-4/6 mx-2"></div>
          <p className="text-pink-500 font-bold">100%</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-bold">4 stars</p>
          <div className="bg-gradient-to-r from-gray-500 to-gray-400 h-4 w-4/6 mx-2"></div>
          <p className="text-pink-500 font-bold">30%</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-bold">3 stars</p>
          <div className="bg-gray-400 h-4 w-4/6 mx-2"></div>
          <p className="text-pink-500 font-bold">0%</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-bold">2 stars</p>
          <div className="bg-gray-400 h-4 w-4/6 mx-2"></div>
          <p className="text-pink-500 font-bold">0%</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="font-bold">1 star</p>
          <div className="bg-gray-400 h-4 w-4/6 mx-2"></div>
          <p className="text-pink-500 font-bold">0%</p>
        </div>
      </div>

      <div className="w-1/4 border border-gray-400 p-4 dark:bg-gray-950 bg-gray-100 text-center mb-8 mr-8">
        <div className="text-6xl font-bold">4</div>
        <div className="flex items-center justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <AiFillStar key={index} className="text-gold text-2xl" />
          ))}
        </div>
        <div className="text-sm font-bold">4 ratings</div>
      </div>
    </div>
  );
};

export default ReviewsContent;
