import { Movie, MoviesOfDay, SearchMovies } from '../../commonTypes';

export interface MoviesState {
  trending: MoviesOfDay[];
  selectedMovie: Movie | null;
  searchResults: SearchMovies[];
  loading: boolean;
  error: string | null;
}
