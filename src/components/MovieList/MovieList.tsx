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
            {movie.poster_path && (
              <img
                width="100"
                height="150"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <span>{movie.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
