import { makeStyles } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginTop: "6rem",
    height: "70vh",
  },
  carouselHeading: {
    fontSize: "6rem",
    fontFamily: '"Merienda"',
    // mixBlendMode: "overlay",
  },
}));
const CarouselPic = () => {
  const classes = useStyles();
  return (
    <div className={classes.carousel}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614636287_86-p-fon-sada-dlya-fotoshopa-116.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className={classes.carouselHeading}>Welcome to Plantarium</h2>
            <p>Your destination for quality plants from all over the world</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images4.alphacoders.com/925/925371.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 className={classes.carouselHeading}>
              We have the best live plants
            </h2>
            <p>We know you'll love your plants as much as we do</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612478745_31-p-rasteniya-na-serom-fone-44.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className={classes.carouselHeading}>
              100% satisfaction guaranteed
            </h2>
            <p>Delivering smiles with very order</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPic;
