import React from "react";
import DestinationHome from "../homeSection/destina/DestinationHome";
import Download from "../homeSection/download/Download";
import Gallery from "../homeSection/gallery/Gallery";
import Hero from "../homeSection/Hero";
import HomeAbout from "../homeSection/HomeAbout";
import MostPopular from "../homeSection/popular/MostPopular";
import Works from "../homeSection/works/Works";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />
    </>
  );
};

export default Home;
