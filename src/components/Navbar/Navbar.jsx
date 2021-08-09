import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

            <NavDropdown
              class="ml-0"
              title="Sign in"
              id="basic-nav-dropdown"
              href="/catalogue"
              style={{
                backgroundColor: " rgba(255,255,255,0.5)",
                borderRadius: "30px",
              }}
            >
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
          <button onClick={handleLogout}>Log out</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarB;
