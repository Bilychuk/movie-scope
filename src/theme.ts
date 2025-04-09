import { createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1ac6b2',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
  },
});

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '24px',
  color: theme.palette.text.primary,
  '&.active': {
    color: '#d21919',
    fontWeight: 'bold',
    borderBottom: '2px solid #d21919',
  },
}));
