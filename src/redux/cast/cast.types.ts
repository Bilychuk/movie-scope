import { Cast } from '../../commonTypes';

export interface CastState {
  cast: Cast[];
  loading: boolean;
  error: string | null;
}
