// src/components/BookList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../features/booksSlice';
import BookForm from './BookForm';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleDelete = (isbn) => {
    dispatch(deleteBook(isbn));
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm />
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} by {book.author} - {book.isbn}
            <button onClick={() => handleDelete(book.isbn)}>Delete</button>
            <BookForm book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
