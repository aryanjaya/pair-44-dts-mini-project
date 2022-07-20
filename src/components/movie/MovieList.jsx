import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieListCard from "./MovieListCard";

const MovieList = ({ list = [] }) => {
  return (
    <Row>
      {list.map((movie) => (
        <Col xl="2" lg="3" md="4" sm="6" xs="6" className="p-2" key={movie.id}>
          <MovieListCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
