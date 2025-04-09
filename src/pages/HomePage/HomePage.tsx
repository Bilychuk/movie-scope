import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Box, Typography, Container } from '@mui/material';
import { fetchTrendingMovies } from '../../redux/movies/operations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectMoviesError,
  selectMoviesLoading,
  selectTrendingMovies,
} from '../../redux/movies/selectors';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectTrendingMovies);
  const loading = useAppSelector(selectMoviesLoading);
  const error = useAppSelector(selectMoviesError);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
        >
          Trending today
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Check out the latest must-see films – there’s definitely something
          here for you!
        </Typography>
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {movies.length > 0 && <MovieList moviesOfDay={movies} />}
      </Box>
    </Container>
  );
}
