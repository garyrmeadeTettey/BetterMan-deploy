import React from 'react';

const RelatedCourses = () => {
  const relatedCourses = [
    { name: 'Euclidean Geometry', image: '...', price: 'Free' },
    { name: 'Number Theory', image: '...', price: 'Free' },
    { name: 'Applied Mathematics', image: '...', price: 'Free' },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-4">Related Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {relatedCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={course.image} alt={course.name} className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600">{course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
