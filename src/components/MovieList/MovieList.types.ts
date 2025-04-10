import { MoviesOfDay, SearchMovies } from '../../commonTypes';

export interface MovieListProps {
  movies: SearchMovies[] | MoviesOfDay[];
}
