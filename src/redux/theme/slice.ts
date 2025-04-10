import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from './theme.types';

const initialState: ThemeState = {
  darkMode: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
      localStorage.setItem('theme', action.payload ? 'dark' : 'light');
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
