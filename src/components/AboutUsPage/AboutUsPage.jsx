import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Image } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  paralax: {
    // backgroundImage: `url(${"http://www.baltana.com/files/wallpapers-24/Plant-Wallpaper-3840x2400-60182.jpg"})`,
    backgroundImage: `url(${"https://wallup.net/wp-content/uploads/2019/09/61744-green-grass-plants-water-droplets.jpg"})`,
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // borderRadius: "30px",
  },
  content: {
    height: "1000px",
    backgroundColor: "rgba(255, 255, 255, .4)",
    fontSize: "40px",

    margin: "4rem",
    // fontSize: "25px",
    borderRadius: "60px",
  },
  aboutUsImg: {
    borderRadius: "40px",
    marginTop: "2rem",
  },
  aboutUsTxt: {
    fontSize: "25px",
    fontFamily: '"Merienda"',
  },
}));
const AboutUsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.paralax}>
      <Container className={classes.content}>
        <Typography className={classes.aboutUsTxt}>
          {" "}
          ABOUT US <br /> I developed a passion for plants way back in my early
          twenties. I grew up in the outskirts of Mexico City, surrounded by
          nature. My family owned a big piece of land which was divided between
          my parents, my brothers, my sister, and me. We each had our own house
          and shared common areas with a pool, a huge garden, and some
          undeveloped land. Eventually, my brothers and I built a greenhouse and
          launched a business selling poinsettias. That's when it all started.
        </Typography>
        <Image
          className={classes.aboutUsImg}
          src="https://im0-tub-ru.yandex.net/i?id=2cf0755685a7606a44d5250a799b34af-l&n=13"
          fluid
        />
      </Container>

      <Container className={classes.content}>
        <Typography className={classes.aboutUsTxt}>
          {" "}
          I left the poinsettia business to my brother and worked some other
          jobs (not plant related). But, once you work with plants, soil,
          flowers, seeds, etc. there's no going back. I felt a yearning and I
          missed the smell of damp soil and watching how a few seeds can turn
          into a beautiful shrub, especially when nurtured with just the right
          amount of water and light! Gardening is truly therapeutic. I’m sure a
          lot of you will agree with me when I say that plants become part of
          the family, just like pets.
        </Typography>
        <Image
          className={classes.aboutUsImg}
          src="https://cdn.pixabay.com/photo/2020/04/30/05/20/nature-5111414_960_720.jpg"
          fluid
        />
      </Container>

      <Container className={classes.content}>
        <Typography className={classes.aboutUsTxt}>
          {" "}
          Eighteen years ago my wife, my two beautiful daughters, and I moved to
          California. We packed up and left Mexico with no specific plan. A true
          improvisation leading to a life project. Mendocino offered excellent
          conditions to go back to the plant business. Soon enough, I was
          experimenting with cacti and succulents and Planet Desert was born.
          Three years later, we moved down South, to beautiful Fallbrook,
          California. Here, the Mediterranean weather is just what our cacti and
          succulents (and we) needed.
        </Typography>
        <Image
          className={classes.aboutUsImg}
          src="https://www.8days.sg/image/11365920/16x9/1920/1080/bb4ad876b9bb1e5d918d701ba7e5c4c2/hQ/02-shop-owner-denise.jpg"
          fluid
        />
      </Container>

      <Container className={classes.content}>
        <Typography className={classes.aboutUsTxt}>
          {" "}
          Not only are we a nursery that offers beautiful and unique succulent
          and cactus plants, but we also deliver! We have perfected the art of
          shipping our gorgeous plants across the country, allowing you to enjoy
          a new plant, no matter where you are. While it may seem strange to
          have a plant shipped to you, we ensure that your new plant will arrive
          in perfect condition. Be sure to shop through our collection of
          succulents and cacti, read up on care instructions, and order your
          favorite plant today! Contact us with any questions you may have.
        </Typography>
        <Image
          className={classes.aboutUsImg}
          src="http://interiordesignshop.net/wp-content/uploads/2018/08/conran03-1.jpg"
          fluid
        />
      </Container>
    </div>
  );
};

export default AboutUsPage;
