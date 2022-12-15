import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#">Vehicle Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="#action1" >Home</Nav.Link>
            <Nav.Link href="#action2">Cars</Nav.Link>
            <Nav.Link href="#action3">Trucks & Vans</Nav.Link>

            <Nav.Link href="#action4">Electrified</Nav.Link>

            <Nav.Link href="#action5">All Vehicles</Nav.Link>
          
            <Nav.Link href="#action6">About Us</Nav.Link>
            <Nav.Link href="#action7">Contact Us</Nav.Link>
            
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link style={{textDecoration: 'none'}} to='/login' >
            <Button  style={{margin:'15px 15px',width:'100px'}}>Sign in</Button>
           </Link>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>

    
  );
}

export default NavScrollExample;