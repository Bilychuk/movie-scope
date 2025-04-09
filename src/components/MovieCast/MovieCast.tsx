import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CastList from '../CastList/CastList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectCast,
  selectCastError,
  selectCastLoading,
} from '../../redux/cast/selectors';
import { fetchCast } from '../../redux/cast/slice';

export default function MovieCast() {
  const { movieId } = useParams();
  const dispatch = useAppDispatch();

  const cast = useAppSelector(selectCast);
  const loading = useAppSelector(selectCastLoading);
  const error = useAppSelector(selectCastError);
  useEffect(() => {
    if (movieId) {
      dispatch(fetchCast(Number(movieId)));
    }
  }, [dispatch, movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cast.length === 0 && <b>No cast info</b>}
      {cast.length > 0 && <CastList cast={cast} />}
    </div>
  );
}
