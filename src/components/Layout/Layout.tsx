import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { LayoutProps } from './Layout.types';
import { Box, Container } from '@mui/material';
import AppBar from '../AppBar/AppBar';

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <AppBar />
      <Container
        maxWidth="lg"
        sx={{
          mt: 2,
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Container>
    </Box>
  );
}
