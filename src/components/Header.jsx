import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-styles">
      <LinkContainer to="/">
        <Navbar.Brand href="/">
          <img
            src="/PPLogo3.svg"
            width="520"
            height="550"
            className="d-inline-block align-top"
            alt="pikelogo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/" style={{ color: "orange", fontSize: 50 }}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/About" style={{ color: "red", fontSize: 50 }}>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Shop" style={{ color: "green", fontSize: 50 }}>
            <Nav.Link>Shop</Nav.Link>
          </LinkContainer>
          <LinkContainer to="Contact" style={{ color: "blue", fontSize: 50 }}>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
