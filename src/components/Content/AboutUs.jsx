import React from "react";

import { Typography } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
// import { Row } from "react-bootstrap";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
// import Routes from "../Routes/Routes";

const useStyles = makeStyles((theme) => ({
  aboutus: {
    flexGrow: 1,

    width: "100%",
    // height: "90vh",
    // backgroundImage: `url(${"https://www.desktopbackground.org/download/1280x800/2012/09/22/456710_ashford-tropics-27-x-27-banana-leaf-wallpapers_1500x1500_h.jpg"})`,
    // background: "linear-gradient(to right top, #1c5347, #7ea067)",
    background: "linear-gradient(to right bottom,  #020e02, #016f5e)",
    // backgroundRepeat: "no-repeat",
    // borderRadius: "40px",
    marginTop: "20rem",
    // marginLeft: "2rem",
  },
  aboutUstxt: {
    color: "white",
    fontSize: "3rem",
    fontWeight: "500",
    margin: "2.5rem",
    // fontFamily: '"Helvetica Neue"',
    textAlign: "center",
    // float: "right",
    fontFamily: '"Merienda"',
    flexDirection: "column",
    // backgroundColor: "orange",
    display: "flex",
  },

  headerFlex: {
    display: "flex",
    justifyContent: "space-around",
    // display: "flex",
    flexDirection: "row-reverse",
  },
  learnmoreBtn: {
    fontSize: "1.5rem",
    color: "#eebb4f",
    borderRadius: "20px",
    borderWidth: "5px",
    marginTop: "2rem",
  },
  video: {
    borderRadius: "30px",
    display: "block",
    // margin: "auto",
    // marginRight: "auto",
    // float: "left",
    borderWidth: "20px",
    borderColor: "white",
    margin: "2rem",
  },
  aboutUsInf: {
    fontSize: "1.5rem",
    fontFamily: '"Merienda"',
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutus}>
      <Box className={classes.headerFlex} component="span" m={1}>
        <Typography className={classes.aboutUstxt}>
          ABOUT US{" "}
          <Typography className={classes.aboutUsInf}>
            Plantarium is a wholesale/retail nursery based <br />
            in Bishkek. We are dedicated to growing a wide
            <br />
            variety of cacti and succulents and are constantly <br />
            adding, developing, and creating more products. We <br />
            offer the best quality plants at the best prices <br />
            possible. After all, we've been in the business for years!
          </Typography>
          <Link to="/aboutuspage">
            <Button className={classes.learnmoreBtn} variant="outlined">
              LEARN MORE &#8594;
            </Button>
          </Link>
        </Typography>
        <iframe
          className={classes.video}
          src="https://www.youtube.com/embed/UvTRLyXr5xQ?"
          frameBorder="0"
          width="820"
          height="515"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </Box>
    </div>
  );
};

export default AboutUs;
