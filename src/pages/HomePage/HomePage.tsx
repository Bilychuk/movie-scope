import { getMovies } from '../../movies-api';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';
import { MoviesOfDay } from '../../commonTypes';
import { Box, Typography, Container } from '@mui/material';

export default function HomePage() {
  const [movies, setMovies] = useState<MoviesOfDay[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

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
