import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectFavorites,
  selectFavoritesLoading,
  selectFavoritesError,
} from '../../redux/favorites/selectors';
import { getFavoriteMovies } from '../../redux/favorites/operations';
import { selectSessionId } from '../../redux/auth/selectors';
import { Typography, Box } from '@mui/material';
import { Movie } from '../../commonTypes';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import FavoriteMovieList from '../../components/FavoriteMovieList/FavoriteMovieList';

export default function FavoritesPage() {
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector(selectSessionId);
  const movies = useAppSelector(selectFavorites) as Movie[];
  const loading = useAppSelector(selectFavoritesLoading);
  const error = useAppSelector(selectFavoritesError);

  useEffect(() => {
    if (sessionId) {
      dispatch(getFavoriteMovies(sessionId));
    }
  }, [dispatch, sessionId]);

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Your Favorite Movies
      </Typography>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && movies.length === 0 && (
        <Typography textAlign="center" color="text.secondary" mt={4}>
          You don’t have any favorite movies yet.
        </Typography>
      )}
      {!loading && !error && movies.length > 0 && (
        <Box my={4}>
          <FavoriteMovieList />
        </Box>
      )}
    </Box>
  );
}
