import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
        gap={3}
      >
        <Typography variant="h3" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sorry! Page not found!
        </Typography>
        <Typography variant="body1">Please visit our home page.</Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
