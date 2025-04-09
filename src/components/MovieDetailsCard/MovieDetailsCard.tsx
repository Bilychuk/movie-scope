import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { selectSelectedMovie } from '../../redux/movies/selectors';
import { selectCast } from '../../redux/cast/selectors';

export default function MovieDetailsCard() {
  const movie = useAppSelector(selectSelectedMovie);
  const cast = useAppSelector(selectCast);

  if (!movie) return null;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        p: 3,
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: 'background.paper',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', md: 300 },
          borderRadius: 2,
          objectFit: 'cover',
        }}
        image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {movie.title}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            User score: {movie.vote_average}%
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {movie.overview}
          </Typography>

          <Typography variant="h6">Genres</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
            {movie.genres.map(genre => (
              <Chip key={genre.id} label={genre.name} color="primary" />
            ))}
          </Stack>

          {cast.length > 0 && (
            <>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Top Cast
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {cast.slice(0, 5).map(actor => (
                  <Chip
                    key={actor.cast_id}
                    label={`${actor.name} (${actor.character})`}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </>
          )}
        </CardContent>
      </Box>
    </Card>
  );
}
