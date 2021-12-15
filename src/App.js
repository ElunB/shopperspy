import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Boards from "./Boards";

const Style = {
  nav: {
    "background-color": "#ff4081",
  },
  navItem: {
    color: "white",
  },
};

function App() {
  return (
    <div>
      <Navbar style={Style.nav} className="mb-3">
        <Container>
          <Navbar.Brand style={Style.navItem} href="#home">
            Shopperspy
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link style={Style.navItem} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={Style.navItem} href="#boards">
              Boards
            </Nav.Link>
            <Nav.Link style={Style.navItem} href="#profile">
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <section>
          <h3 className="mb-3">Your boards</h3>
          <Boards />
        </section>
      </Container>
    </div>
  );
}

export default App;
