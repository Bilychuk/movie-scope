import { Link, useLocation } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import { MovieListProps } from './MovieList.types';

export default function MovieList({ movies }: MovieListProps) {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Grid
        container
        spacing={3}
        columns={{ xs: 8, sm: 8, md: 12 }}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {movies &&
          movies.map(movie => (
            <Grid key={movie.id} columns={{ xs: 4, sm: 4, md: 3 }}>
              <Card
                component={Link}
                to={`/movies/${movie.id}`}
                state={location}
                sx={{
                  width: 200,
                  height: '100%',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : '/no-photo.png'
                  }
                  alt={movie.title}
                  sx={{
                    width: 200,
                    height: 300,
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
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
