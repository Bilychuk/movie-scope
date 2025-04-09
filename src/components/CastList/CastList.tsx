import CastCard from '../CastCard/CastCard';
import { CastListProps } from './CastList.types';
import { Box, Grid } from '@mui/material';

export default function CastList({ cast }: CastListProps) {
  return (
    <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', py: 2 }}>
      <Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
        {cast.map(actor => (
          <Grid key={actor.id} sx={{ minWidth: 160 }}>
            <CastCard actor={actor} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
