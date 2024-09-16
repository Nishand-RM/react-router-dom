// src/components/AuthorForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addAuthor, updateAuthor } from '../features/authorsSlice';

const AuthorForm = ({ author }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    <Formik
      initialValues={{
        name: author ? author.name : '',
        birthDate: author ? author.birthDate : '',
        biography: author ? author.biography : '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (author) {
          dispatch(updateAuthor(values));
        } else {
          dispatch(addAuthor(values));
        }
        resetForm();
      }}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Birth Date</label>
          <Field type="date" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>
        <div>
          <label>Biography</label>
          <Field as="textarea" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>
        <button type="submit">{author ? 'Update' : 'Add'} Author</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
