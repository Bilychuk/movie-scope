import { useAppDispatch } from '../../redux/hooks';
import { getRequestToken } from '../../redux/auth/operations';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginButton() {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const resultAction = await dispatch(getRequestToken());
    if (getRequestToken.fulfilled.match(resultAction)) {
      const token = resultAction.payload;
      const redirectTo = `${window.location.origin}/login-redirect`;
const encodedRedirect = encodeURIComponent(redirectTo);
window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${encodedRedirect}`;
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#90caf9',
        borderRadius: 2,
        color: '#000',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: '#64b5f6',
        },
      }}
      startIcon={<LoginIcon />}
      onClick={handleLogin}
    >
      Log In
    </Button>
  );
}
