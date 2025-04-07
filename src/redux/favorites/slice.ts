import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteMovie, FavoritesState } from './favorites.types';

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<FavoriteMovie>) {
      state.list.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.list = state.list.filter(movie => movie.id !== action.payload);
    },
    setFavorites(state, action: PayloadAction<FavoriteMovie[]>) {
      state.list = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
