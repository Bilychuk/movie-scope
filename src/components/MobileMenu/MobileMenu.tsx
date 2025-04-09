import { Drawer, IconButton, Box, Stack, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import LogoutButton from '../LogoutButton/LogoutButton';
import LoginButton from '../LoginButton/LoginButton';
import { selectDarkMode } from '../../redux/theme/selectors';
import { toggleTheme } from '../../redux/theme/slice';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { StyledNavLink } from '../../theme';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const darkMode = useAppSelector(selectDarkMode);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => dispatch(toggleTheme());

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Stack spacing={2} sx={{ mt: 1 }}>
            <StyledNavLink to="/" onClick={() => setOpen(false)}>
              Home
            </StyledNavLink>
            <StyledNavLink to="/movies" onClick={() => setOpen(false)}>
              Movies
            </StyledNavLink>
            {isLoggedIn && (
              <StyledNavLink to="/favorites" onClick={() => setOpen(false)}>
                Favorites
              </StyledNavLink>
            )}
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={2}>
            {!isLoggedIn && <LoginButton />}
            {isLoggedIn && <LogoutButton />}
            <IconButton onClick={handleToggleTheme} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
