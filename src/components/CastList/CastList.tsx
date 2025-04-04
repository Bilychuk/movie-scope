import CastCard from '../CastCard/CastCard';
import { CastListProps } from './CastList.types';

export default function CastList({ cast }: CastListProps) {
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <CastCard actor={actor} />
        </li>
      ))}
    </ul>
  );
}
