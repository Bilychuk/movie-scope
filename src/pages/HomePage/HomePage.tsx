import { getMovies } from '../../movies-api';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';
import { MoviesOfDay } from '../../commonTypes';

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
    <div className={css.container}>
      {error && <ErrorMessage />}
      <h1>Trending today</h1>
      {loading && <Loader />}
      {movies.length > 0 && <MovieList moviesOfDay={movies} />}
    </div>
  );
}
