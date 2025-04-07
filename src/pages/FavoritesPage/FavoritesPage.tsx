import MovieList from '../../components/MovieList/MovieList';

export default function FavoritesPage() {
  return (
    <div>
      <PageTitle>Your favorite movies all in one place.</PageTitle>
      <p>
        Here you can find all the movies you’ve added to your favorites. Save
        your favorite titles to watch later or share them with friends. Your
        favorite movies are stored locally, so you won’t lose them when you come
        back. Click on a movie to see more details or remove it from your
        favorites. Don’t have any favorites yet? Start exploring and add some
        now!
      </p>
      <MovieList />
    </div>
  );
}
