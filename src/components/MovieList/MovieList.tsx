import { Link, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MovieListProps } from './MovieList.types';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export default function MovieList({ moviesOfDay, movies }: MovieListProps) {
  const location = useLocation();
  const movieList = moviesOfDay ?? movies ?? [];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Grid
        container
        spacing={3}
        columns={{ xs: 8, sm: 8, md: 12 }}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {movieList.map(movie => (
          <Grid columns={{ xs: 4, sm: 4, md: 3 }} key={movie.id}>
            <Card
              component={Link}
              to={`/movies/${movie.id}`}
              state={location}
              sx={{ textDecoration: 'none' }}
            >
              {movie.poster_path && (
                <CardMedia
                  component="img"
                  height="150"
                  image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
              <CardContent>
                <Typography variant="body1" align="center">
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
