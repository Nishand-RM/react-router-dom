// src/App.jsx
import React from 'react';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';

const App = () => {
  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <BookList />
      <AuthorList />
    </div>
  );
};

export default App;
