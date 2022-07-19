import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieListCard from "./MovieListCard";

const MovieList = () => {
  return (
    <Row>
      <Col xl="2" lg="3" md="4" sm="6" xs="6" className="p-2">
        <MovieListCard />
      </Col>
    </Row>
  );
};

export default MovieList;
