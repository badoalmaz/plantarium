import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     position: "fixed",
//     width: "100%",
//     overflow: "hidden",
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 2,
//     // textAlign: "center",
//     fontSize: 30,
//     fontFamily: '"Merienda"',
//     color: "#eebb4f",
//     fontWeight: "700",
//     float: "left",
// marginRight: "12rem",
// marginTop: 30,
// backgroundImage:
//   "https://i.pinimg.com/736x/f4/34/f9/f434f99ff8ffbfe544636613ac317e4e.jpg",
//   },
//   navbar: {
//     // backgroundImage: `url(${"https://data.whicdn.com/images/336888842/original.gif"})`,
//     // backgroundColor: "#0c120e",
//     // backgroundColor: "transparent",
//     // borderBottom: "5px solid black",
//     // opacity: "50%",
//     // backgroundColor: "green",
//     background: "rgba(0, 0, 0, 0.5)",
//   },
//   navbarbtn: {
//     color: "white",
//   },
// }));

const NavbarB = () => {
  //   const classes = useStyles();
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
            fontSize: 30,
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
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <div className={classes.root}>
    //   <AppBar className={classes.navbar} position="static">
    //     <Toolbar>
    //       <IconButton
    //         edge="start"
    //         className={classes.menuButton}
    //         color="inherit"
    //         aria-label="menu"
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Link to="/aboutuspage">
    //         <Button className={classes.navbarbtn}>About us</Button>
    //       </Link>
    //       <Link to="/">
    //         <Button className={classes.navbarbtn}>Home</Button>
    //       </Link>
    //       <Link to="/catalogue">
    //         <Button className={classes.navbarbtn}>Catalogue</Button>
    //       </Link>
    //       <Button className={classes.navbarbtn}>Sale%</Button>
    //       <Button className={classes.title}>PLANTARIUM</Button>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
};

export default NavbarB;
