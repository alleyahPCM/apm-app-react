import React from "react";
//navbar img
import navlogo from "../img/nav-logo.jpg";

//navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../App.css';

function NavbarComponent() {
  return (
      <Navbar expand="lg" className="row custom-navbar">
        <Container>
          <img
            src={navlogo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          <Navbar.Brand href="/">New Jeans</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/music">
                Music
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavbarComponent;
