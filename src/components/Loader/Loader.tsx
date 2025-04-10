import { Oval } from 'react-loader-spinner';
import { Box } from '@mui/material';

export default function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <Oval
        visible={true}
        height={40}
        width={40}
        color="#ff1b1e"
        secondaryColor="#ff1b1e"
        ariaLabel="oval-loading"
      />
    </Box>
  );
}
