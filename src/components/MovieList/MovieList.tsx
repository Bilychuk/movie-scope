import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import { MovieListProps } from './MovieList.types';

export default function MovieList({ moviesOfDay, movies }: MovieListProps) {
  const location = useLocation();
  const movieList = moviesOfDay ?? movies ?? [];
  return (
    <ul className={css.list}>
      {movieList.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
