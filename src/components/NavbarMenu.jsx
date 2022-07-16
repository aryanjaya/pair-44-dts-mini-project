import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#">Movie Catalog</Navbar.Brand>
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
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Register</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
