import { Outlet } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/images/logos/creativarian-logo.svg';

const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  `;


const Navigation = () => {
	return (
		<>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">
			<StyledLogo className='logo' />
		</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="shop">Shop</Nav.Link>
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/services/development">Development</NavDropdown.Item>
          <NavDropdown.Item href="/services/design">Design</NavDropdown.Item>
          <NavDropdown.Item href="/services/seo">SEO</NavDropdown.Item>
          <NavDropdown.Item href="/services/content-writing">Content Writing</NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item href="/services/consulting">
            Consulting
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

			<Outlet />
		</>
	);
};

export default Navigation;