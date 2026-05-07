import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button, } from 'react-bootstrap';
import './navbar.css'

const StudentNav = () => {

  //use to set the location/path
  const { pathname } = useLocation();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className='nav-link'>Student Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fornavbarlink ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/" active={pathname === '/' }>All Students</Nav.Link>

          </Nav>
          <Button as={Link} to="/add" className='btn1'> Add Student</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StudentNav;