import { Link } from "react-router-dom";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContext";

const NavbarB = ({ handleLogout }) => {
  const {
    user: { email },
  } = useAuth();
  console.log({ email });

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
          {email ? (
            <button
              style={{
                backgroundColor: "rgba(1, 1, 1, .7",
                borderRadius: "10px",
                color: "white",
                borderColor: "#eebb4f",
                fontFamily: '"Merienda"',
              }}
              onClick={handleLogout}
            >
              Log out
            </button>
          ) : null}

          {email ? null : (
            <Link to="/login">
              <button
                style={{
                  backgroundColor: "rgba(1, 1, 1, .7",
                  borderRadius: "10px",
                  color: "white",
                  borderColor: "#eebb4f",
                  fontFamily: '"Merienda"',
                }}
              >
                Sign in
              </button>
            </Link>
          )}

          {email === ADMIN ? (
            <Link to="/addproductpage">
              <button
                style={{
                  backgroundColor: "rgba(1, 1, 1, .7",
                  borderRadius: "10px",
                  color: "white",
                  borderColor: "#eebb4f",
                  fontFamily: '"Merienda"',
                }}
              >
                Add plant
              </button>
            </Link>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarB;
