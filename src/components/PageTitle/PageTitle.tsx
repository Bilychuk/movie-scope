import { Typography } from '@mui/material';
import { PageTitleProps } from './PageTitle.types';

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        fontWeight: 'bold',
        mb: 3,
        textAlign: 'center',
        color: 'primary.main',
      }}
    >
      {children}
    </Typography>
  );
}
