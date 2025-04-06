import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme';

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

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
        <Layout
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(prev => !prev)}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}
