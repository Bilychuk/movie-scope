import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Card,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAccountId, selectSessionId } from '../../redux/auth/selectors';
import { removeFavoriteMovie } from '../../redux/favorites/operations';
import { FavoriteMovieCardProps } from './FavoriteMovieCard.types';

export default function FavoriteMovieCard({ movie }: FavoriteMovieCardProps) {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector(selectSessionId);
  const accountId = useAppSelector(selectAccountId);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : '/no-photo.png';

  const handleRemove = (movieId: number) => {
    if (!sessionId || !accountId) return;
    dispatch(
      removeFavoriteMovie({ sessionId, accountId, movieId, isFavorite: false })
    );
  };

  return (
    <Card
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
      <Link
        state={location}
        to={`/movies/${movie.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 200,
            height: 300,
            objectFit: 'cover',
          }}
          image={imageUrl}
          alt={movie.title}
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
        <IconButton color="error" onClick={() => handleRemove(movie.id)}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
}
