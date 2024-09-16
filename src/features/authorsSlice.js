// src/features/authorsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {
    addAuthor: (state, action) => {
      state.push(action.payload);
    },
    updateAuthor: (state, action) => {
      const index = state.findIndex(author => author.name === action.payload.name);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteAuthor: (state, action) => {
      return state.filter(author => author.name !== action.payload);
    },
  },
});

export const { addAuthor, updateAuthor, deleteAuthor } = authorsSlice.actions;
export default authorsSlice.reducer;
