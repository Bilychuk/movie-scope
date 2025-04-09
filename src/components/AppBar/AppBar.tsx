import Navigation from '../Navigation/Navigation';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logo from '../Logo/Logo';
import { selectDarkMode } from '../../redux/theme/selectors';
import { toggleTheme } from '../../redux/theme/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import LogoutButton from '../LogoutButton/LogoutButton';
import LoginButton from '../LoginButton/LoginButton';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function AppBar() {
  const darkMode = useAppSelector(selectDarkMode);
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <MuiAppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 1, sm: 2, md: 3 },
          py: 1,
        }}
      >
        <Logo />

        {isMobile ? (
          <MobileMenu />
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Navigation />
            {!isLoggedIn && <LoginButton />}
            {isLoggedIn && <LogoutButton />}
            <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </MuiAppBar>
  );
}
