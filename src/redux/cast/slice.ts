import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Cast } from '../../commonTypes';
import { tmdbApi } from '../../api/tmdbApi';
import { CastState } from './cast.types';

const initialState: CastState = {
  cast: [],
  loading: false,
  error: null,
};

export const fetchCast = createAsyncThunk<Cast[], number>(
  'cast/fetchCast',
  async (movieId, thunkAPI) => {
    try {
      const response = await tmdbApi.get(`/movie/${movieId}/credits`);
      return response.data.cast;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const castSlice = createSlice({
  name: 'cast',
  initialState,
  reducers: {
    clearSelectedCasts: state => {
      state.cast = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCast.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCast.fulfilled, (state, action) => {
        state.cast = action.payload;
        state.loading = false;
      })
      .addCase(fetchCast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const castReducer = castSlice.reducer;
export const { clearSelectedCasts } = castSlice.actions;
