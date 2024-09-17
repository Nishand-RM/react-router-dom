import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllCourses from './pages/AllCourses';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
