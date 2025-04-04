import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <h2 className={css.error}>
      Failed to load movie details. Please reload or try again later.
    </h2>
  );
}
