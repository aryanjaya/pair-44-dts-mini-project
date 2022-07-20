import { useEffect, useState } from "react";
import MovieList from "../components/movie/MovieList";
import MovieApi from "../services/tmdb/MovieApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const { data } = await MovieApi.getNowPlaying();

      setMovies(data ? data.results : []);
    };

    loadMovies();
  }, []);

  return (
    <div className="section">
      <hgroup className="section-title">
        <h1>Movie to Watch</h1>
      </hgroup>
      <div className="section-body">
        <MovieList list={movies} />
      </div>
    </div>
  );
};

export default HomePage;
