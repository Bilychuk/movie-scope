import { createAsyncThunk } from '@reduxjs/toolkit';
import { tmdbApi } from '../../api/tmdbApi';
import { Cast } from '../../commonTypes';

export const fetchCast = createAsyncThunk<Cast[], number>(
  'cast/fetchCast',
  async (movieId, thunkAPI) => {
    try {
      const res = await tmdbApi.get(`/movie/${movieId}/credits`);
      return res.data.cast;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
