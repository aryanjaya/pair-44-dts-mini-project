import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import TmdbApi from "../../services/tmdb";

const MovieListCard = ({ movie }) => {
  const getYear = (date) => {
    date = new Date(date);

    return date.getFullYear();
  };

  const getImage = (path) => TmdbApi.getImage(path, "w342");

  return (
    <Card bg="darker" text="white">
      <Link to={`/movie/${movie.id}`}>
        <Card.Img variant="top" src={getImage(movie.poster_path)}></Card.Img>
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </Card.Title>
        <Card.Subtitle className="mt-2">
          <div className="d-flex justify-content-between">
            <span>
              <FontAwesomeIcon icon={faStar} className="rating-star" />{" "}
              {movie.vote_average}
            </span>
            {getYear(movie.release_date)}
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default MovieListCard;
