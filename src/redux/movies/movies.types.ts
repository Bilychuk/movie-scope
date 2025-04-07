import { MoviesOfDay, SearchMovies } from '../../commonTypes';

export interface MoviesState {
  list: MoviesOfDay | SearchMovies[];
}
