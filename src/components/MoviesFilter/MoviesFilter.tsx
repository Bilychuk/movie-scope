import { useState } from 'react';
import css from './MoviesFilter.module.css';
import { MoviesFilterProps } from './MoviesFilter.types';

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
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
