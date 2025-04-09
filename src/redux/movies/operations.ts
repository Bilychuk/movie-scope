import { createAsyncThunk } from '@reduxjs/toolkit';
import { tmdbApi } from '../../api/tmdbApi';
import { Movie, MoviesOfDay, SearchResult } from '../../commonTypes';

export const fetchTrendingMovies = createAsyncThunk<MoviesOfDay[]>(
  'movies/fetchTrendingMovies',
  async (_, thunkAPI) => {
    try {
      const res = await tmdbApi.get('/trending/movie/day');
      return res.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const fetchMovieById = createAsyncThunk<Movie, number>(
  'movies/fetchMovieById',
  async (movieId, thunkAPI) => {
    try {
      const res = await tmdbApi.get(`/movie/${movieId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const searchMovies = async (query: string): Promise<SearchResult> => {
  const response = await tmdbApi.get('/search/movie', {
    params: {
      query,
    },
  });
  return response.data;
};

export const fetchMoviesByQuery = createAsyncThunk(
  'movies/fetchByQuery',
  async (query: string, thunkAPI) => {
    try {
      const response = await searchMovies(query);
      return response.results;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
