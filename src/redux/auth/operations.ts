import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { tmdbApi } from '../../api/tmdbApi';

export const getRequestToken = createAsyncThunk<
  string,
  void,
  { rejectValue: string }
>('auth/getRequestToken', async (_, thunkAPI) => {
  try {
    const response = await tmdbApi.get('/authentication/token/new');
    return response.data.request_token;
  } catch (error) {
    const axiosError = error as AxiosError;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});

export const createSessionId = createAsyncThunk<
  { sessionId: string; accountId: number },
  string,
  { rejectValue: string }
>('auth/createSessionId', async (requestToken, thunkAPI) => {
  try {
    const sessionRes = await tmdbApi.post('/authentication/session/new', {
      request_token: requestToken,
    });

    const sessionId = sessionRes.data.session_id;

    const accountRes = await tmdbApi.get('/account', {
      params: {
        session_id: sessionId,
      },
    });

    const accountId = accountRes.data.id;

    return { sessionId, accountId };
  } catch (error) {
    const axiosError = error as AxiosError;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});
