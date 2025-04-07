import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '24px',
  color: theme.palette.text.primary,
  marginRight: theme.spacing(2),
  '&.active': {
    color: '#d21919',
    fontWeight: 'bold',
    borderBottom: `2px solid #d21919`,
  },
}));

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box
      component="nav"
      sx={{ display: 'flex', alignItems: 'center', padding: 2 }}
    >
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/favorites">Favorites</StyledNavLink>}
    </Box>
  );
}
