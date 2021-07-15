import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return <Navbar sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#aboutme">Portfolio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#contactme">Contact Me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
   };

   export default NavBar;