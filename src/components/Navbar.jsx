import React from "react";
import Logo from "../assets/logo-small.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function navbar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container className="display-class">
        <Navbar.Brand href="#" className="navbar-brand">
          <img src={Logo}width="40" height="40" class="d-inline-block align-center logo"/>Minify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#compressor">Compress</Nav.Link>
            <Nav.Link href="#">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


