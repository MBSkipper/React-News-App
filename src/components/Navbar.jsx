import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png' 

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
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
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