import MovieList from "../components/movie/MovieList";

const HomePage = () => (
  <section className="section">
    <hgroup className="section-title">
      <h1>What to Watch</h1>
    </hgroup>
    <section className="section-body">
      <MovieList />
    </section>
  </section>
);

export default HomePage;
