import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'; 
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-bootstrap';

function  NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" >
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo} // note how the image is imported to the navbar
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            News24</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#subs">Subscriptions</Nav.Link>
            <NavDropdown title="Post to news" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Upload a video</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Upload a photo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Send your report</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="light"  className='me-2'>Login</Button>
            <Button variant="dark">Register</Button>
            
            
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default  NavbarComponent;


/**
 # Logo
    Line 5 - import image with its suffix .png because it is not a js file
    Line 14 - import the logo in the src prop as {logo}

 */