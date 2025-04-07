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
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
