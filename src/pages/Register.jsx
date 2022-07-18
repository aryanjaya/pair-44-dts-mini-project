import { Row, Col, Container } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <Container>
      <Row className="min-vh-100 align-items-center justify-content-center">
        <Col md={6}>
          <h1 className="text-light display-4 mb-1">Create New Account</h1>
          <p className="text-muted lead mb-5">
            Just few clicks and we are ready
          </p>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
