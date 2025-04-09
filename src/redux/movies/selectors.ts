import { RootState } from '../store';

export const selectTrendingMovies = (state: RootState) => state.movies.trending;
export const selectSelectedMovie = (state: RootState) =>
  state.movies.selectedMovie;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;
export const selectMoviesError = (state: RootState) => state.movies.error;
export const selectSearchResults = (state: RootState) =>
  state.movies.searchResults;
