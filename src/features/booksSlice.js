// src/features/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    updateBook: (state, action) => {
      const index = state.findIndex(book => book.isbn === action.payload.isbn);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteBook: (state, action) => {
      return state.filter(book => book.isbn !== action.payload);
    },
  },
});

export const { addBook, updateBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
