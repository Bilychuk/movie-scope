import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../movies-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CastList from '../CastList/CastList';
import { Cast } from '../../commonTypes';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState<Cast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!movieId) return;
    async function fetchCast() {
      try {
        setLoading(true);
        const data = await getCast(Number(movieId));
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cast.length === 0 && <b>No cast info</b>}
      {cast.length > 0 && <CastList cast={cast} />}
    </div>
  );
}
