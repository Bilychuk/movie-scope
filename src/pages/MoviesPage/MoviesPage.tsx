import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import MoviesFilter from '../../components/MoviesFilter/MoviesFilter';
import MoviesList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectMoviesError,
  selectMoviesLoading,
  selectSearchResults,
} from '../../redux/movies/selectors';
import { fetchMoviesByQuery } from '../../redux/movies/operations';
import { SearchMovies } from '../../commonTypes';

export default function MoviesPage() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = (searchParams.get('query') ?? '').trim();
  const movies: SearchMovies[] = useAppSelector(selectSearchResults);
  const loading = useAppSelector(selectMoviesLoading);
  const error = useAppSelector(selectMoviesError);

  const handleFilterChange = (newFilter: string) => {
    searchParams.set('query', newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!queryParam) return;

    dispatch(fetchMoviesByQuery(queryParam))
      .unwrap()
      .then(results => {
        if (results.length === 0) {
          toast.error('Sorry, we did not find movies by such query.', {
            duration: 6000,
            position: 'bottom-right',
          });
        }
      });
  }, [dispatch, queryParam]);

  const filteredMovies = useMemo(() => {
    const queryLower = queryParam.toLowerCase();
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(queryLower)
    );
  }, [queryParam, movies]);

  return (
    <>
      <MoviesFilter value={queryParam} onFilter={handleFilterChange} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {!loading && !error && movies.length > 0 && (
        <MoviesList movies={filteredMovies} />
      )}
      <Toaster
        toastOptions={{
          style: { color: 'white' },
          success: { style: { background: 'green' } },
          error: { style: { background: 'red' } },
        }}
      />
    </>
  );
}
