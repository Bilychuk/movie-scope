import { List, ListItem, Divider, Box } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
import { useAppSelector } from '../../redux/hooks';
import { selectReviews } from '../../redux/reviews/selectors';

export default function ReviewsList() {
  const reviews = useAppSelector(selectReviews);

  return (
    <Box sx={{ mt: 2 }}>
      <List disablePadding>
        {reviews.map((review, index) => (
          <Box key={review.id}>
            <ListItem disableGutters>
              <ReviewCard review={review} />
            </ListItem>
            {index < reviews.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
}
