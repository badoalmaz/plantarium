import { Typography } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import NavbarB from "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import { useSpring, animated, Spring } from "react-spring";
import { Carousel } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${"https://i.pinimg.com/originals/f0/a9/0c/f0a90c2bc63dfa352e39c28dfff16d1f.jpg"})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  moto: {
    color: "white",
    fontSize: "5vw",
    fontWeight: "500",

    marginTop: "11vh",
    fontFamily: '"Merienda"',
    textAlign: "center",
  },
  headerPic: {
    height: "35vw",
    width: "35vw",
    borderRadius: "200px",
    margin: "3vh",
    marginTop: "11vh",
  },
  headerFlex: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    fontSize: "3vw",
    color: "#eebb4f",
    borderRadius: "20px",
    borderWidth: "5px",
  },
  carousel: {
    marginTop: "10vw",
    borderRadius: "45px",
    margin: "auto",
  },
  carouselHeading: {
    fontSize: "6vw",
    fontFamily: '"Merienda"',
  },
  carouselText: {
    fontSize: "2vw",
  },

  homeContent: {
    padding: theme.spacing(5),
    margin: "10vw auto",
    maxWidth: 1000,
    // height: "80vw",
    backgroundColor: "rgba(255, 255, 255, .4)",
    fontSize: "4vw",
    fontFamily: '"Merienda"',
    borderRadius: "60px",
  },

  aboutUstxt: {
    color: "white",
    fontSize: "3vw",
    fontWeight: "500",
    margin: "2.5rem",
    textAlign: "center",
    fontFamily: '"Merienda"',
    flexDirection: "column",
    display: "flex",
  },

  headerFlexContent: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row-reverse",
  },
  learnmoreBtn: {
    fontSize: "2vw",
    color: "#eebb4f",
    borderRadius: "20px",
    borderWidth: "5px",
    marginTop: "2rem",
  },
  aboutUsInf: {
    fontSize: "2vw",
    fontFamily: '"Merienda"',
  },
}));

const Header = ({ handleLogout }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <Box className={classes.headerFlex} component="span" m={1}>
          <Typography className={classes.moto}>
            FIND <br /> YOUR <br /> SOULPLANT
            <br />
            <Spring
              loop
              from={{ opacity: 0, color: "red" }}
              to={[
                { opacity: 1, color: "#ffaaee" },
                { opacity: 0, color: "rgb(14,26,19)" },
              ]}
            >
              {(styles) => (
                <animated.div style={styles}>
                  <Link to="/catalogue">
                    <Button className={classes.buttonStyle} variant="outlined">
                      SHOP NOW &#8594;
                    </Button>
                  </Link>
                </animated.div>
              )}
            </Spring>
          </Typography>

          <img
            className={classes.headerPic}
            src="https://i.pinimg.com/originals/ac/98/ce/ac98ce1eb6858366478a47b634ba8bd2.gif"
            alt=""
          />
        </Box>

        {/* carousel starts */}

        <div className={classes.carousel}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "90vh",
                }}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99ac9937538757.5743ff707f936.gif"
                alt="First slide"
              />
              <Carousel.Caption>
                <h2 className={classes.carouselHeading}>
                  Welcome to Plantarium
                </h2>
                <p className={classes.carouselText}>
                  Your destination for quality plants from all over the world
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "90vh",
                }}
                className="d-block w-100"
                src="https://i.pinimg.com/originals/4b/f2/59/4bf259dfb2ed5696c38d8c12f9c0b946.gif"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h2 className={classes.carouselHeading}>
                  We have the best live plants
                </h2>
                <p className={classes.carouselText}>
                  We know you'll love your plants as much as we do
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "90vh",
                }}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d54a337538757.5743ff70e21b3.gif"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h2 className={classes.carouselHeading}>100% satisfaction</h2>
                <p className={classes.carouselText}>
                  Delivering smiles with very order
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* content starts*/}

        <div className={classes.homeContent}>
          <Box className={classes.headerFlexContent} component="span" m={1}>
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
              <Spring
                loop
                from={{ opacity: 0, color: "red" }}
                to={[
                  { opacity: 1, color: "#ffaaee" },
                  { opacity: 0, color: "rgb(14,26,19)" },
                ]}
              >
                {(styles) => (
                  <animated.div style={styles}>
                    <Link to="/aboutuspage">
                      <Button
                        className={classes.learnmoreBtn}
                        variant="outlined"
                      >
                        LEARN MORE &#8594;
                      </Button>
                    </Link>
                  </animated.div>
                )}
              </Spring>
            </Typography>
            {/* <iframe
              className={classes.video}
              src="https://www.youtube.com/embed/UvTRLyXr5xQ?"
              frameBorder="0"
              width="820"
              height="515"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            /> */}
          </Box>
        </div>
      </div>
      <Navbar handleLogout={handleLogout} />
    </>
  );
};

export default Header;
