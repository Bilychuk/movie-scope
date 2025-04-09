import { createSlice } from '@reduxjs/toolkit';
import { ReviewsState } from './reviews.types';
import { fetchReviewsByMovieId } from './operations';

const initialState: ReviewsState = {
  items: [],
  loading: false,
  error: null,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchReviewsByMovieId.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviewsByMovieId.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchReviewsByMovieId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
