import { useState } from 'react';
import css from './MoviesFilter.module.css';
import { MoviesFilterProps } from './MoviesFilter.types';
import Button from '@mui/material/Button';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.filter}
          type="text"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
