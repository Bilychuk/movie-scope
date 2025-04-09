import { createAsyncThunk } from '@reduxjs/toolkit';
import { tmdbApi } from '../../api/tmdbApi';
import { Review } from '../../commonTypes';

export const fetchReviewsByMovieId = createAsyncThunk<
  Review[],
  number,
  { rejectValue: string }
>('reviews/fetchByMovieId', async (movieId, { rejectWithValue }) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to fetch reviews');
  }
});
