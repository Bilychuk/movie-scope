import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import { setDarkMode, toggleTheme } from '../../redux/theme/slice';
import { selectDarkMode } from '../../redux/theme/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import LoginPage from '../../pages/LoginPage/LoginPage';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage')
);
const MovieDetailsPage = lazy(
  () => import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const FavoritesPage = lazy(
  () => import('../../pages/FavoritesPage/FavoritesPage')
);
const LoginRedirect = lazy(
  () => import('../../pages/LoginRedirect/LoginRedirect')
);

export default function App() {
  const darkMode = useAppSelector(selectDarkMode);
  const dispatch = useAppDispatch();

  const storedTheme = localStorage.getItem('theme');
  const handleToggle = () => dispatch(toggleTheme());

  useEffect(() => {
    if (storedTheme === 'dark') {
      dispatch(setDarkMode(false));
    } else if (storedTheme === 'light') {
      dispatch(setDarkMode(true));
    }
  }, [dispatch, storedTheme]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  component={<FavoritesPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="/login-redirect" element={<LoginRedirect />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/favorites"
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}
