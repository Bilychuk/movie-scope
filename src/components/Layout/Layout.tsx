import Navigation from '../Navigation/Navigation';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { LayoutProps } from './Layout.types';
import { AppBar, Toolbar, IconButton, Box, Container } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logo from '../Logo/Logo';

export default function Layout({
  children,
  darkMode,
  toggleTheme,
}: LayoutProps) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo />
          <Navigation />
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 2 }}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Container>
    </Box>
  );
}
