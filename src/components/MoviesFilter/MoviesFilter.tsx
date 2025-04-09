import { useState } from 'react';
import { MoviesFilterProps } from './MoviesFilter.types';
import { TextField, Button, Box } from '@mui/material';

export default function MoviesFilter({ value, onFilter }: MoviesFilterProps) {
  const [query, setQuery] = useState<string>(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFilter(query);
    setQuery('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <TextField
        label="Search movies..."
        variant="outlined"
        size="small"
        value={query}
        onChange={handleChange}
        sx={{ width: 300 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ textTransform: 'none' }}
      >
        Search
      </Button>
    </Box>
  );
}
