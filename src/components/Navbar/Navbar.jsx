import { Link } from "react-router-dom";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarB = ({ handleLogout }) => {
  return (
    //navbar start
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            color: "#eebb4f",
            fontSize: "2vw",
            fontFamily: '"Merienda"',
            fontWeight: "700",
            // marginRight: "15rem",
          }}
        >
          PLANTARIUM
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              fontSize: 20,
              fontFamily: '"Merienda"',
              fontWeight: "500",
              color: "white",
            }}
          >
            <Nav.Link
              href="/"
              style={{
                color: "white",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/aboutuspage"
              style={{
                color: "white",
              }}
            >
              About us
            </Nav.Link>
            <Nav.Link
              href="/catalogue"
              style={{
                color: "white",
              }}
            >
              Catalogue
            </Nav.Link>
            {}
          </Nav>
          <button onClick={handleLogout}>Log out</button>
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarB;
