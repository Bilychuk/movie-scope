export interface AuthState {
  token: string | null;
  sessionId: string | null;
  accountId: number | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}
