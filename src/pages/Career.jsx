import React from 'react';
import CourseCard from '../components/CourseCard';

const Career = () => {
  return (
    <div>
      <h2>Career Guidance</h2>
      <CourseCard 
        title="Plan Your Career" 
        description="Get insights and tips for a successful career." 
        author="Emma Johnson" 
        date="10 Sep, 2024" 
        duration={5} 
      />
    </div>
  );
};

export default Career;
