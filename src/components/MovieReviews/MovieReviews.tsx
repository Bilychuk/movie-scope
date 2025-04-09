import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ReviewsList from '../ReviewsList/ReviewsList';
import css from './MovieReviews.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectReviews,
  selectReviewsError,
  selectReviewsLoading,
} from '../../redux/reviews/selectors';
import { fetchReviewsByMovieId } from '../../redux/reviews/operations';

export default function MovieReviews() {
  const { movieId } = useParams();
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(selectReviews);
  const loading = useAppSelector(selectReviewsLoading);
  const error = useAppSelector(selectReviewsError);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchReviewsByMovieId(Number(movieId)));
    }
  }, [dispatch, movieId]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {reviews.length === 0 && !loading && (
        <b>We do not have any reviews for this movie.</b>
      )}
      {reviews.length > 0 && <ReviewsList />}
    </div>
  );
}
