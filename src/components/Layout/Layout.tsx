import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { LayoutProps } from './Layout.types';
import { Box, Container } from '@mui/material';
import AppBar from '../AppBar/AppBar';

export default function Layout({
  children,
  darkMode,
  toggleTheme,
}: LayoutProps) {
  return (
    <Box>
      <AppBar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container sx={{ mt: 2 }}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Container>
    </Box>
  );
}
