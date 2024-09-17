import React from 'react';
import CourseCard from '../components/CourseCard';

const FullStack = () => {
  return (
    <div>
      <h2 className="mb-4">Full Stack Development</h2>
      <div className="row">
        <CourseCard 
          title="Master Full Stack Development" 
          description="Learn to develop web applications from scratch." 
          author="John Doe" 
          date="16 Sep, 2024" 
          duration={6} 
        />
      </div>
    </div>
  );
};

export default FullStack;
