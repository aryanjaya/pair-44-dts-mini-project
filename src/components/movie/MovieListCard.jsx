import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";

const MovieListCard = () => {
  return (
    <Card bg="darker" text="white">
      <Card.Img
        variant="top"
        src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX280_CR0,0,280,414_.jpg"
      ></Card.Img>
      <Card.Body>
        <Card.Title>Doctor Strange</Card.Title>
        <Card.Subtitle>
          <div className="d-flex justify-content-between">
            <span>
              <FontAwesomeIcon icon={faStar} className="rating-star" /> 5.6
            </span>
            2022
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default MovieListCard;
