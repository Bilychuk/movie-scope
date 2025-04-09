import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CastCardProps } from './CastCard.types';

export default function CastCard({ actor }: CastCardProps) {
  const imageUrl = actor.profile_path
    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
    : '/no-photo.png';

  return (
    <Card
      sx={{
        maxWidth: 200,
        borderRadius: 4,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        height="270"
        image={imageUrl}
        alt={actor.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600}>
          {actor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Character: {actor.character}
        </Typography>
      </CardContent>
    </Card>
  );
}
