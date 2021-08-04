import { Typography } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    width: "100%",
    height: "95vh",
    backgroundColor: "black",
    background: "linear-gradient(to right bottom, #1c5347, #7ea067)",
  },
  moto: {
    color: "white",
    fontSize: "5rem",
    fontWeight: "500",
    marginLeft: "4rem",
    marginTop: "10rem",
    fontFamily: '"Merienda"',
    textAlign: "center",
  },
  headerPic: {
    height: "70vh",
    width: "35rem",
    borderRadius: "200px",
    margin: "3rem",
    marginTop: "8rem",
  },
  headerFlex: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    fontSize: "1.5rem",
    color: "#eebb4f",
    borderRadius: "20px",
    borderWidth: "5px",
  },
  //   navbar: {
  //     marginTop: "20rem",
  //   },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Navbar className={classes.navbar} />
      <Box className={classes.headerFlex} component="span" m={1}>
        <Typography className={classes.moto}>
          FIND <br /> YOUR <br /> SOULPLANT
          <br />
          <Button className={classes.buttonStyle} variant="outlined">
            SHOP NOW &#8594;
          </Button>
        </Typography>
        <img
          className={classes.headerPic}
          //   src="https://i.pinimg.com/originals/ac/98/ce/ac98ce1eb6858366478a47b634ba8bd2.gif"
          src="https://i.pinimg.com/originals/3e/48/d8/3e48d8a50b0091c9884280e3612180ce.gif"
          alt=""
        />
      </Box>
    </div>
  );
};

export default Header;
