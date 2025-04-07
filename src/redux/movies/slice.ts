import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesState } from './movies.types';
import { MoviesOfDay, SearchMovies } from '../../commonTypes';

const initialState: MoviesState = {
  list: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<MoviesOfDay | SearchMovies[]>) {
      state.list = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
