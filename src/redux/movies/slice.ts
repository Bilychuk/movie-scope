import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMoviesByQuery,
} from './operations';
import { MoviesState } from './movies.types';

const initialState: MoviesState = {
  trending: [],
  selectedMovie: null,
  searchResults: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearSelectedMovie: state => {
      state.selectedMovie = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrendingMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trending = action.payload;
        state.loading = false;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchMovieById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchMoviesByQuery.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesByQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchMoviesByQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { clearSelectedMovie } = moviesSlice.actions;
