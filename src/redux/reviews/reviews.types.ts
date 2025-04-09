import { Review } from '../../commonTypes';

export interface ReviewsState {
  items: Review[];
  loading: boolean;
  error: string | null;
}
