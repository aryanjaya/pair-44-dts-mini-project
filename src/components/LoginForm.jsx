import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(email, pwd);
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Form onSubmit={handleLogin}>
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
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
