import { useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectMoviesError,
  selectMoviesLoading,
  selectSelectedMovie,
} from '../../redux/movies/selectors';
import { fetchMovieById } from '../../redux/movies/operations';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  Paper,
  useTheme,
} from '@mui/material';
import { clearSelectedMovie } from '../../redux/movies/slice';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectSelectedMovie);
  const loading = useAppSelector(selectMoviesLoading);
  const error = useAppSelector(selectMoviesError);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const location = useLocation();
  const backLinkURL = useRef(location.state ?? '/movies');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    if (movieId) {
      dispatch(clearSelectedMovie());
      dispatch(fetchMovieById(Number(movieId)));
    }
  }, [dispatch, movieId]);

  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Button
          component={Link}
          to={backLinkURL.current}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Go back
        </Button>
      </Box>

      {loading && <Loader />}
      {error && <ErrorMessage />}

      {movie && (
        <>
          <Box sx={{ mt: 2 }}>
            <MovieDetailsCard />
            {isLoggedIn && <FavoriteButton movieId={Number(movieId)} />}
          </Box>
          <Box sx={{ mt: 5 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: isDarkMode ? '#1e1e1e' : '#f9f9f9',
                color: isDarkMode ? '#fff' : 'inherit',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <InfoOutlinedIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" color="primary">
                  Additional Information
                </Typography>
              </Box>

              <List>
                <ListItem disablePadding>
                  <Button
                    component={Link}
                    to="cast"
                    sx={{
                      fontSize: '20px',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      width: '100%',
                      pl: 0,
                      color: isDarkMode ? '#90caf9' : 'text.primary',
                    }}
                  >
                    🎭 Cast
                  </Button>
                </ListItem>
                <Divider
                  sx={{ my: 1, borderColor: isDarkMode ? '#444' : '#ccc' }}
                />
                <ListItem disablePadding>
                  <Button
                    component={Link}
                    to="reviews"
                    sx={{
                      fontSize: '20px',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      width: '100%',
                      pl: 0,
                      color: isDarkMode ? '#90caf9' : 'text.primary',
                    }}
                  >
                    📝 Reviews
                  </Button>
                </ListItem>
              </List>
            </Paper>
          </Box>
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
