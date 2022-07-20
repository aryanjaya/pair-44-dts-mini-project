import { useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const { register } = useUser();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await register(email, pwd);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form onSubmit={handleRegister}>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3 text-light"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          className="bg-dark text-light"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </FloatingLabel>

      <Button variant="danger" type="submit" className="w-100 btn-lg py-3">
        Create Account
      </Button>
    </Form>
  );
};

export default RegisterForm;
