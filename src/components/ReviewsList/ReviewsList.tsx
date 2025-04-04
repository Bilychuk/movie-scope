import ReviewCard from '../ReviewCard/ReviewCard';
import { ReviewsListProps } from './ReviewsList.types';

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}
