// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/booksSlice';
import authorsReducer from './features/authorsSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
  },
});

export default store;
