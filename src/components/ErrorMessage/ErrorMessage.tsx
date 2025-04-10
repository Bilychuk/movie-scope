import { Typography } from '@mui/material';

export default function ErrorMessage() {
  return (
    <Typography variant="h6" color="error" align="center" sx={{ mt: 4 }}>
      Failed to load movie details. Please reload or try again later.
    </Typography>
  );
}
