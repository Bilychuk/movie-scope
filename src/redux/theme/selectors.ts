import { RootState } from '../store';

export const selectDarkMode = (state: RootState) => state.theme.darkMode;
