import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    overflow: "hidden",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    // textAlign: "center",
    fontSize: 50,
    fontFamily: '"Merienda"',
    color: "#eebb4f",
    fontWeight: "700",
    marginRight: "12rem",
    // marginTop: 30,

    // backgroundImage:
    //   "https://i.pinimg.com/736x/f4/34/f9/f434f99ff8ffbfe544636613ac317e4e.jpg",
  },
  navbar: {
    // backgroundImage: `url(${"https://data.whicdn.com/images/336888842/original.gif"})`,
    // backgroundColor: "#0c120e",
    // backgroundColor: "transparent",
    // borderBottom: "5px solid black",
    // opacity: "50%",
    // backgroundColor: "green",
    background: "rgba(0, 0, 0, 0.5)",
  },
  navbarbtn: {
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    //navbar start
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/aboutuspage">
            <Button className={classes.navbarbtn}>About us</Button>
          </Link>
          <Link to="/">
            <Button className={classes.navbarbtn}>Home</Button>
          </Link>
          <Link to="/catalogue">
            <Button className={classes.navbarbtn}>Catalogue</Button>
          </Link>
          <Button className={classes.navbarbtn}>Sale%</Button>
          <Button className={classes.title}>PLANTARIUM</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
