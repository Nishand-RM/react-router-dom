// src/components/AuthorList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAuthor } from '../features/authorsSlice';
import AuthorForm from './AuthorForm';

const AuthorList = () => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);

  const handleDelete = (name) => {
    dispatch(deleteAuthor(name));
  };

  return (
    <div>
      <h2>Authors</h2>
      <AuthorForm />
      <ul>
        {authors.map((author) => (
          <li key={author.name}>
            {author.name} - {author.birthDate}
            <button onClick={() => handleDelete(author.name)}>Delete</button>
            <AuthorForm author={author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
