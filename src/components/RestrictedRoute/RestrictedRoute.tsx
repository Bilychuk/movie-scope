import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { RestrictedRouteProps } from './RestrictedRoute.types';

export default function RestrictedRoute({
  component,
  redirectTo,
}: RestrictedRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
