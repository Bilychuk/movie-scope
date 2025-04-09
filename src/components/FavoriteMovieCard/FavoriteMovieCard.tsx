import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Movie } from '../../commonTypes';
import { Link, useLocation } from 'react-router-dom';

interface FavoriteMovieCardProps {
  movie: Movie;
  onRemove: (movieId: number) => void;
}

export default function FavoriteMovieCard({
  movie,
  onRemove,
}: FavoriteMovieCardProps) {
  const location = useLocation();
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Link
        state={location}
        to={`/movies/${movie.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          component="img"
          height="350"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            gutterBottom
            noWrap
            sx={{ textAlign: 'center' }}
            title={movie.title}
          >
            {movie.title}
          </Typography>
        </CardContent>
      </Link>

      <CardActions sx={{ justifyContent: 'center', mt: 'auto' }}>
        <IconButton color="error" onClick={() => onRemove(movie.id)}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
}
