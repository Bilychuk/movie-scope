import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { StyledNavLink } from '../../theme';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/favorites">Favorites</StyledNavLink>}
    </Box>
  );
}
