import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function UserMenu() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.name} </p>
      <Button variant="contained" type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
