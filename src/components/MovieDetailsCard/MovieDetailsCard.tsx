import { Movie } from '../../commonTypes';
import css from './MovieDetailsCard.module.css';
import { MovieDetailsCardProps } from './MovieDetailsCard.types';

export default function MovieDetailsCard({ movie }: MovieDetailsCardProps) {
  return (
    <div className={css.info}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={css.details}>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average} %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie.genres.map(genre => {
            const genreName = genre.name;
            return `${genreName} `;
          })}
        </p>
      </div>
    </div>
  );
}
