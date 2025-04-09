import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleFavoriteMovie } from '../../redux/favorites/operations';
import { selectSessionId, selectAccountId } from '../../redux/auth/selectors';
import { selectFavorites } from '../../redux/favorites/selectors';
import { FavoriteButtonProps } from './FavoriteButton.types';
import { Movie } from '../../commonTypes';

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector(selectSessionId);
  const accountId = useAppSelector(selectAccountId);
  const favorites = useAppSelector(selectFavorites) as Movie[];

  const isFavorite = favorites.some(movie => movie.id === movieId);

  const handleToggle = () => {
    if (sessionId && accountId !== null) {
      dispatch(
        toggleFavoriteMovie({
          sessionId,
          accountId,
          movieId,
          isFavorite: !isFavorite,
        })
      );
    }
  };

  return (
    <Button
      onClick={handleToggle}
      variant={isFavorite ? 'contained' : 'outlined'}
      color="error"
      sx={{
        mt: 2,
        borderRadius: 4,
        textTransform: 'none',
        fontWeight: 500,
        gap: 1,
        px: 2,
        py: 1,
        boxShadow: isFavorite ? 2 : 0,
        '&:hover': {
          backgroundColor: isFavorite ? '#c62828' : '#f5f5f5',
        },
      }}
      startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </Button>
  );
}
