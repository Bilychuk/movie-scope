import { useAppDispatch } from '../../redux/hooks';
import { getRequestToken } from '../../redux/auth/operations';
import { Button } from '@mui/material';

export default function LoginButton() {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const resultAction = await dispatch(getRequestToken());
    if (getRequestToken.fulfilled.match(resultAction)) {
      const token = resultAction.payload;
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173/login-redirect`;
    }
  };

  return (
    <Button color="inherit" onClick={handleLogin}>
      Log In
    </Button>
  );
}
