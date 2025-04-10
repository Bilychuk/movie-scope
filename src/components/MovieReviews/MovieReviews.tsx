import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ReviewsList from '../ReviewsList/ReviewsList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectReviews,
  selectReviewsError,
  selectReviewsLoading,
} from '../../redux/reviews/selectors';
import { fetchReviewsByMovieId } from '../../redux/reviews/operations';
import { Box, Typography } from '@mui/material';
import { clearSelectedReviews } from '../../redux/reviews/slice';

export default function MovieReviews() {
  const { movieId } = useParams();
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(selectReviews);
  const loading = useAppSelector(selectReviewsLoading);
  const error = useAppSelector(selectReviewsError);

  useEffect(() => {
    if (movieId) {
      dispatch(clearSelectedReviews());
      dispatch(fetchReviewsByMovieId(Number(movieId)));
    }
  }, [dispatch, movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && reviews.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary">
            We do not have any reviews for this movie.
          </Typography>
        </Box>
      )}
      {reviews.length > 0 && <ReviewsList />}
    </div>
  );
}
