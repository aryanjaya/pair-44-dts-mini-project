import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarMenu from "./components/NavbarMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
