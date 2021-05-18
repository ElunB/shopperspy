import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Boards from './Boards';


function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Shopperspy</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#boards">Boards</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <Container>
        <h3>Your boards</h3>
    <Boards></Boards>
  </Container>
  </div>
  );
}

export default App;
