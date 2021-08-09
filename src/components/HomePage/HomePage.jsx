import React from "react";
import CarouselPic from "../Carousel/Carousel";
import AboutUs from "../Content/AboutUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const HomePage = ({ handleLogout }) => {
  return (
    <div>

      <Header handleLogout={handleLogout} />


      <Footer />

    </div>
  );
};

export default HomePage;
