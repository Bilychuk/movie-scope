import { createSlice } from '@reduxjs/toolkit';
import { createSessionId, getRequestToken } from './operations';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  token: null,
  sessionId: localStorage.getItem('session_id') || null,
  accountId: null,
  isLoggedIn: !!localStorage.getItem('session_id'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
      state.sessionId = null;
      state.isLoggedIn = false;
      localStorage.removeItem('session_id');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRequestToken.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(createSessionId.fulfilled, (state, action) => {
        state.sessionId = action.payload.sessionId;
        state.accountId = action.payload.accountId;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = null;

        localStorage.setItem('session_id', action.payload.sessionId);
        localStorage.setItem('account_id', String(action.payload.accountId));
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
