import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
<div className='container-fluid nt'>
    <Navbar expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#"><h1 className='headd'>Organics</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">products</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                contact
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
             
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
           placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;

