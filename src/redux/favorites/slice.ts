import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteMovies } from './operations';
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
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
