import { Container, Row, Col, Image } from "react-bootstrap";
import ProfilePicture from "../assets/ProfilePicture.png";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container className="bg-dark">
      <Row className="g-0 min-vh-100 align-items-center">
        {/* Image Placeholder */}
        <Col
          id="login-image-hero"
          className="d-none d-md-block position-relative"
        >
          <Image src={ProfilePicture} fluid />
        </Col>
        {/* Login Form */}
        <Col className="d-flex justify-content-center">
          <div className="bg-dark w-75">
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
