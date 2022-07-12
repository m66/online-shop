import React from "react";
import {Nav, Navbar, Container, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Company name</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Գլխավոր էջ</Nav.Link>
            <Nav.Link href="/news">Նորություններ</Nav.Link>
            <NavDropdown title="Տեսականի" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/watches">Ժամացույցներ</NavDropdown.Item>
              <NavDropdown.Item href="/boxes">Ժամացույցի Տուփեր</NavDropdown.Item>
              <NavDropdown.Item href="/makeup">Դիմահարդարում</NavDropdown.Item>
              <NavDropdown.Item href="/silver-jewelry">Արծաթյա զարդեր</NavDropdown.Item>
              <NavDropdown.Item href="/perfumes">Օծանելիքներ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/others">
                Այլ
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about-us" disabled>
              Մեր մասին
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Որոնել"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Որոնել</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
