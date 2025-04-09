import { RootState } from '../store';

export const selectCast = (state: RootState) => state.cast.cast;
export const selectCastLoading = (state: RootState) => state.cast.loading;
export const selectCastError = (state: RootState) => state.cast.error;
