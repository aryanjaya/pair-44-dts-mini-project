import { Form, FloatingLabel, Button } from "react-bootstrap";

const RegisterForm = () => {
  return (
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3 text-light"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          className="bg-dark text-light"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-5 text-light"
      >
        <Form.Control
          type="password"
          placeholder="Password"
          className="bg-dark text-light"
        />
      </FloatingLabel>

      <Button variant="danger" type="submit" className="w-100 btn-lg py-3">
        Create Account
      </Button>
    </Form>
  );
};

export default RegisterForm;
