import React from "react";
import CarouselPic from "../Carousel/Carousel";
import AboutUs from "../Content/AboutUs";
import Header from "../Header/Header";

const HomePage = ({ handleLogout }) => {
  return (
    <div>
      <Header handleLogout={handleLogout} />

      {/* <CarouselPic /> */}
      {/* <AboutUs /> */}
    </div>
  );
};

export default HomePage;
