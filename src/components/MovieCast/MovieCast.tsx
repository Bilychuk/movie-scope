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
import { Box, Typography } from '@mui/material';

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
      {!loading && !error && cast.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No cast info available.
          </Typography>
        </Box>
      )}
      {cast.length > 0 && <CastList />}
    </div>
  );
}
