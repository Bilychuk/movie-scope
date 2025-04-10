import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteMovies, removeFavoriteMovie } from './operations';
import { FavoritesState } from './favorites.types';

const initialState: FavoritesState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFavoriteMovies.pending, state => {
        state.loading = true;
      })
      .addCase(getFavoriteMovies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getFavoriteMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(removeFavoriteMovie.pending, state => {
        state.loading = true;
      })
      .addCase(removeFavoriteMovie.fulfilled, (state, action) => {
        state.items = state.items.filter(
          movie => movie.id !== action.meta.arg.movieId
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(removeFavoriteMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
