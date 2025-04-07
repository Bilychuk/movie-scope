import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthCredentials, AuthResponse, User } from './auth.types';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk<AuthResponse, AuthCredentials>(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post<AuthResponse>(
        '/users/signup',
        credentials
      );
      setAuthHeader(data.token);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const logIn = createAsyncThunk<AuthResponse, AuthCredentials>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post<AuthResponse>(
        '/users/login',
        credentials
      );
      setAuthHeader(data.token);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const logOut = createAsyncThunk<void>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const refreshUser = createAsyncThunk<User, void, { state: RootState }>(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;

    if (!savedToken) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      setAuthHeader(savedToken);
      const { data } = await axios.get<User>('/users/current');
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      return !!state.auth.token;
    },
  }
);
