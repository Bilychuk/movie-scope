import { Button } from '@mui/material';
import { logout } from '../../redux/auth/slice';
import { useAppDispatch } from '../../redux/hooks';

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={handleLogout}
      variant="contained"
      color="error"
      size="medium"
    >
      Logout
    </Button>
  );
}
