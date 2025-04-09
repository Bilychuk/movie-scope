import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '../../commonTypes';
import { ToggleFavoritePayload } from './favorites.types';
import { tmdbApi } from '../../api/tmdbApi';

export const getFavoriteMovies = createAsyncThunk<Movie[], string>(
  'favorites/getFavoriteMovies',
  async (sessionId, thunkAPI) => {
    try {
      const accountRes = await tmdbApi.get('/account', {
        params: { session_id: sessionId },
      });

      const accountId = accountRes.data.id;

      const favoritesRes = await tmdbApi.get(
        `/account/${accountId}/favorite/movies`,
        {
          params: {
            session_id: sessionId,
          },
        }
      );
      return favoritesRes.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const toggleFavoriteMovie = createAsyncThunk<
  void,
  ToggleFavoritePayload
>('favorites/toggleFavoriteMovie', async (data, thunkAPI) => {
  try {
    const { sessionId, accountId, movieId, isFavorite } = data;

    await tmdbApi.post(
      `/account/${accountId}/favorite`,
      {
        media_type: 'movie',
        media_id: movieId,
        favorite: isFavorite,
      },
      {
        params: { session_id: sessionId },
      }
    );
    thunkAPI.dispatch(getFavoriteMovies(sessionId));
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
