import { Typography } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useSpring, animated, Spring } from "react-spring";
import { Carousel } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useAuth } from "../../contexts/AuthContext";

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

const HomePage = () => {
  const classes = useStyles();
  const { handleLogout, user } = useAuth();
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
          </Box>
        </div>
        {/* FOOTER */}
        <div
          class="col-12"
          style={{
            background: "linear-gradient(to right bottom,  #020e02, #016f5e)",
          }}
        >
          <footer class=" text-center text-white">
            <div class="container p-4">
              <section class="mb-4">
                <IconButton class="btn btn-outline-light btn-floating m-1">
                  <FacebookIcon color="primery" />
                </IconButton>

                <IconButton class="btn btn-outline-light btn-floating m-1">
                  <TwitterIcon color="primery" />
                </IconButton>

                <IconButton class="btn btn-outline-light btn-floating m-1">
                  <InstagramIcon color="primery" />
                </IconButton>

                <IconButton class="btn btn-outline-light btn-floating m-1">
                  <LinkedInIcon color="primery" />
                </IconButton>

                <IconButton class="btn btn-outline-light btn-floating m-1">
                  <YouTubeIcon color="primery" />
                </IconButton>
              </section>

              <section class="">
                <form action="">
                  <div class="row d-flex justify-content-center">
                    <div class="col-auto">
                      <p class="pt-2">
                        <strong>Sign up for our newsletter</strong>
                      </p>
                    </div>

                    <div class="col-md-5 col-12">
                      <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="form5Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form5Example2">
                          Email address
                        </label>
                      </div>
                    </div>

                    <div class="col-auto">
                      <button type="submit" class="btn btn-outline-light mb-4">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              <section class="mb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </section>
            </div>

            <div
              class="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2021
              <a class="text-white" href="https://mdbootstrap.com/">
                Plantarium.com
              </a>
            </div>
          </footer>
        </div>
      </div>
      <Navbar handleLogout={handleLogout} />
    </>
  );
};

export default HomePage;
