import { RootState } from '../store';

export const selectFavorites = (state: RootState) => state.favorites.items;
export const selectFavoritesLoading = (state: RootState) =>
  state.favorites.loading;
export const selectFavoritesError = (state: RootState) => state.favorites.error;
