import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { PrivateRouteProps } from './PrivateRoute.types';

export default function PrivateRoute({
  component,
  redirectTo,
}: PrivateRouteProps) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
