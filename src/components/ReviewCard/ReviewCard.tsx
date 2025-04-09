import { ReviewCardProps } from './ReviewCard.types';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Rating,
} from '@mui/material';
import { format } from 'date-fns';

export default function ReviewCard({ review }: ReviewCardProps) {
  const { author_details, content, created_at } = review;
  const avatarUrl = author_details.avatar_path
    ? author_details.avatar_path.startsWith('/https')
      ? author_details.avatar_path.slice(1)
      : `https://image.tmdb.org/t/p/w45${author_details.avatar_path}`
    : '';

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        backgroundColor: 'background.paper',
        boxShadow: 2,
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar
            src={avatarUrl}
            alt={author_details.username}
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {author_details.name || author_details.username}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {format(new Date(created_at), 'PPP')}
            </Typography>
          </Box>
        </Box>

        {author_details.rating !== null && (
          <Box sx={{ mb: 1 }}>
            <Rating
              name="review-rating"
              value={author_details.rating / 2}
              precision={0.5}
              readOnly
              size="small"
            />
          </Box>
        )}

        <Typography variant="body1" color="text.primary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
