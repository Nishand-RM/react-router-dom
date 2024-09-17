import React from 'react';
import CourseCard from '../components/CourseCard';

const AllCourses = () => {
  const courses = [
    { title: 'Full Stack Development', description: 'Learn how to build web applications.', author: 'John Doe', date: '16 Sep, 2024', duration: 6 },
    { title: 'Data Science', description: 'Understand data and derive insights.', author: 'Jane Smith', date: '15 Sep, 2024', duration: 3 },
    { title: 'Cyber Security', description: 'Protect data from vulnerabilities.', author: 'Alan Watts', date: '13 Sep, 2024', duration: 3 },
    { title: 'Career Guidance', description: 'Plan your career path.', author: 'Emma Johnson', date: '10 Sep, 2024', duration: 5 }
  ];

  return (
    <div>
      <h2 className="mb-4">All Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
