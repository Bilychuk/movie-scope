import css from './CastCard.module.css';
import { CastCardProps } from './CastCard.types';

export default function CastCard({ actor }: CastCardProps) {
  return (
    <div>
      <img
        className={css.photo}
        src={`https://image.tmdb.org/t/p/w154${actor.profile_path}`}
        alt={actor.profile_path ? actor.name : 'No photo available'}
      />
      <p className={css.name}>{actor.name}</p>
      <p className={css.character}>Character: {actor.character}</p>
    </div>
  );
}
