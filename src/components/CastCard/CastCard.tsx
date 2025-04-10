import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { CastCardProps } from './CastCard.types';

export default function CastCard({ actor }: CastCardProps) {
  const imageUrl = actor.profile_path
    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
    : '/no-photo.png';

  return (
    <Card
      sx={{
        maxWidth: 200,
        height: 360,
        borderRadius: 4,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={actor.name}
        sx={{
          height: 270,
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={600}
          noWrap
          title={actor.name}
        >
          {actor.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          title={actor.character}
        >
          Character: {actor.character}
        </Typography>
      </CardContent>
    </Card>
  );
}
