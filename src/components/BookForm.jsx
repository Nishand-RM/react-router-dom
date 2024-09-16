// src/components/BookForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/booksSlice';

const BookForm = ({ book }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });

  return (
    <Formik
      initialValues={{
        title: book ? book.title : '',
        author: book ? book.author : '',
        isbn: book ? book.isbn : '',
        publicationDate: book ? book.publicationDate : '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (book) {
          dispatch(updateBook(values));
        } else {
          dispatch(addBook(values));
        }
        resetForm();
      }}
    >
      <Form>
        <div>
          <label>Title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>
        <div>
          <label>Author</label>
          <Field type="text" name="author" />
          <ErrorMessage name="author" component="div" />
        </div>
        <div>
          <label>ISBN</label>
          <Field type="text" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        </div>
        <div>
          <label>Publication Date</label>
          <Field type="date" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" />
        </div>
        <button type="submit">{book ? 'Update' : 'Add'} Book</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
