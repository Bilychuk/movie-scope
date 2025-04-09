import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

export default function Logo() {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        marginRight: '30px',
      }}
    >
      <Box
        component="img"
        src="/logo.png"
        alt="MovieScope Logo"
        sx={{
          height: { xs: 36, sm: 48, md: 60 },
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: '20px', sm: '28px', md: '32px' },
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        MovieScope
      </Typography>
    </Box>
  );
}
