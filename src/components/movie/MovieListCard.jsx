import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import TmdbApi from "../../services/tmdb";

const MovieListCard = ({ movie }) => {
  const getYear = (date) => {
    date = new Date(date);

    return date.getFullYear();
  };

  const getImage = (path) => TmdbApi.getImage(path, 'w342');

  return (
    <Card bg="darker" text="white">
      <Card.Img
        variant="top"
        src={getImage(movie.poster_path)}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle>
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
