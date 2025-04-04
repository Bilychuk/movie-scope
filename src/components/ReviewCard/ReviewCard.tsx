import css from './ReviewCard.module.css';
import { ReviewCardProps } from './ReviewCard.types';

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div>
      <h3 className={css.author}>{review.author}</h3>
      <p className={css.content}>{review.content}</p>
    </div>
  );
}
