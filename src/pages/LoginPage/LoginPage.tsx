import { Box, Typography } from '@mui/material';
import LoginButton from '../../components/LoginButton/LoginButton';

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 8,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign in with TMDb
      </Typography>
      <LoginButton />
    </Box>
  );
}
