import { Box, Grid } from '@mui/material';
import FavoriteMovieCard from '../FavoriteMovieCard/FavoriteMovieCard';
import { useAppSelector } from '../../redux/hooks';
import { selectFavorites } from '../../redux/favorites/selectors';

export default function FavoriteMovieList() {
  const movies = useAppSelector(selectFavorites);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Grid
        container
        spacing={3}
        columns={{ xs: 8, sm: 8, md: 12 }}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {movies.map(movie => (
          <Grid key={movie.id} columns={{ xs: 4, sm: 4, md: 3 }}>
            <FavoriteMovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
