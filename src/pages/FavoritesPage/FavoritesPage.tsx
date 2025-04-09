import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectFavorites,
  selectFavoritesLoading,
} from '../../redux/favorites/selectors';
import {
  getFavoriteMovies,
  toggleFavoriteMovie,
} from '../../redux/favorites/operations';
import { selectAccountId, selectSessionId } from '../../redux/auth/selectors';
import { Typography, CircularProgress, Box } from '@mui/material';
import { Movie } from '../../commonTypes';
import FavoriteMovieCard from '../../components/FavoriteMovieCard/FavoriteMovieCard';

export default function FavoritesPage() {
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector(selectSessionId);
  const accountId = useAppSelector(selectAccountId);
  const movies = useAppSelector(selectFavorites) as Movie[];
  const loading = useAppSelector(selectFavoritesLoading);

  useEffect(() => {
    if (sessionId) {
      dispatch(getFavoriteMovies(sessionId));
    }
  }, [dispatch, sessionId]);

  const handleRemoveFavorite = (movieId: number) => {
    if (!sessionId || !accountId) return;
    dispatch(
      toggleFavoriteMovie({ sessionId, accountId, movieId, isFavorite: false })
    );
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Your Favorite Movies
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : movies.length === 0 ? (
        <Typography textAlign="center" color="text.secondary" mt={4}>
          You don’t have any favorite movies yet.
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            mt: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {movies.map(movie => (
            <FavoriteMovieCard
              key={movie.id}
              movie={movie}
              onRemove={handleRemoveFavorite}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
