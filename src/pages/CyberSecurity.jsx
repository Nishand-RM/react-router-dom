import React from 'react';
import CourseCard from '../components/CourseCard';

const CyberSecurity = () => {
  return (
    <div>
      <h2>Cyber Security</h2>
      <CourseCard 
        title="Cyber Security Essentials" 
        description="Learn how to secure systems and protect data." 
        author="Alan Watts" 
        date="13 Sep, 2024" 
        duration={3} 
      />
    </div>
  );
};

export default CyberSecurity;
