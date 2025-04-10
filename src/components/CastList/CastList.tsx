import { selectCast } from '../../redux/cast/selectors';
import { useAppSelector } from '../../redux/hooks';
import CastCard from '../CastCard/CastCard';
import { Box, Grid } from '@mui/material';

export default function CastList() {
  const cast = useAppSelector(selectCast);
  return (
    <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', py: 2, px: 1 }}>
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
