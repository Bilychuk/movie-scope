import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../movies-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ReviewsList from '../ReviewsList/ReviewsList';
import css from './MovieReviews.module.css';
import { Review } from '../../commonTypes';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!movieId) {return}
      async function fetchReviews() {
        try {
          setLoading(true);
          const data = await getReviews(Number(movieId));
          setReviews(data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {reviews.length === 0 && <b>We do not have any reviews fo this movie</b>}
      {reviews.length > 0 && <ReviewsList reviews={reviews} />}
    </div>
  );
}
