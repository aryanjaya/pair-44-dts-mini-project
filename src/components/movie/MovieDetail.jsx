import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import TmdbApi from "../../services/tmdb";
import MovieApi from "../../services/tmdb/MovieApi";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      const { data } = await MovieApi.getDetailMovie(params.movieId);

      setMovie(data);
      setLoading(false);
    };

    loadMovie();
  }, [params.movieId]);

  const getYear = (date) => {
    date = new Date(date);

    return date.getFullYear();
  };

  const getImage = (path) => TmdbApi.getImage(path, "w342");

  if (loading) {
    return (
      <main className="text-center mt-5">
        <h3>Loading...</h3>
      </main>
    );
  }

  return (
    <section>
      <div>
        <Row>
          <Col sm="3" className="movie-detail-poster">
            <Image src={getImage(movie.poster_path)} fluid rounded />
          </Col>
          <Col className="d-flex">
            <div className="movie-detail-content">
              <div className="movie-detail-header">
                <div className="movie-detail-title">
                  <h2>
                    {movie.title}{" "}
                    <span className="release-date">
                      ({getYear(movie.release_date)})
                    </span>
                  </h2>
                </div>
                <div className="movie-detail-subtitle">
                  <span>
                    <FontAwesomeIcon icon={faStar} className="rating-star" />{" "}
                    {movie.vote_average}
                  </span>
                </div>
                <div className="movie-detail-intro mt-3">
                  <h3 className="tagline">{movie.tagline}</h3>
                  <h3>Overview</h3>
                  <div className="overview">
                    <p>{movie.overview}</p>
                  </div>
                  <div className="genre">
                    {movie.genres.map((genre) => (
                      <Badge pill bg="light" text="dark" key={genre.id}>
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MovieDetail;
