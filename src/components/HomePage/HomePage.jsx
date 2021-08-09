import React from "react";
import CarouselPic from "../Carousel/Carousel";
import AboutUs from "../Content/AboutUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CarouselPic />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default HomePage;
