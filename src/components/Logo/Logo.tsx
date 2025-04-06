import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Logo() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src="/logo.png" alt="MovieScope Logo" style={{ maxHeight: 90 }} />
        <Typography
          sx={{
            fontSize: '32px',
            color: 'white',
            fontWeight: 'bold',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          MovieScope
        </Typography>
      </Link>
    </Typography>
  );
}
