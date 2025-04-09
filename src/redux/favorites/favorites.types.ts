import { Movie } from '../../commonTypes';

export interface FavoritesState {
  items: Movie[];
  loading: boolean;
  error: string | null;
}
export interface ToggleFavoritePayload {
  sessionId: string;
  accountId: number;
  movieId: number;
  isFavorite: boolean;
}
