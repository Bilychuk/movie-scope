import Navigation from '../Navigation/Navigation';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AppBar as MuiAppBar, Toolbar, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logo from '../Logo/Logo';
import { selectDarkMode } from '../../redux/theme/selectors';
import { toggleTheme } from '../../redux/theme/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

export default function AppBar() {
  const darkMode = useAppSelector(selectDarkMode);
  const dispatch = useAppDispatch();
  const handleToggle = () => dispatch(toggleTheme());

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <MuiAppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          <IconButton onClick={handleToggle} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
