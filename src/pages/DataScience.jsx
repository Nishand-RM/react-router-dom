import React from 'react';
import CourseCard from '../components/CourseCard';

const DataScience = () => {
  return (
    <div>
      <h2>Data Science</h2>
      <CourseCard 
        title="Data Science Bootcamp" 
        description="Become proficient in data science." 
        author="Jane Smith" 
        date="15 Sep, 2024" 
        duration={3} 
      />
    </div>
  );
};

export default DataScience;
