import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/users/signup">Register</NavLink>
      <NavLink to="/users/login">Log In</NavLink>
    </div>
  );
}
