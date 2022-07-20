import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <div className="mb-5 d-block d-md-none">
              <h1 className="display-2 text-light">Welcome!</h1>
              <p className="lead text-secondary">
                Please login with your account
              </p>
            </div>
            <LoginForm />
            <p className="text-muted text-center mt-4">
              Don't have account?{" "}
              <Link to="/register">
                <span className="text-light">Create one</span>
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
