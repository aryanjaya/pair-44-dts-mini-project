import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const NavbarMenu = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="bg-darker">
      <Container>
        <Link to="/">
          <Navbar.Brand>Movie Catalog</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="side-navbar" />
        <Navbar.Offcanvas
          id="side-navbar"
          aria-labelledby="side-navbar"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Movie Catalog</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {user && (
                <NavDropdown title={user?.email} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => logout()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {!user && (
                <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
              )}
              {!user && (
                <Nav.Link onClick={() => navigate("/register")}>
                  Register
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
