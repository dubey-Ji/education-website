import React from "react";
import HeroSection from "./homeComponents/HeroSection";
import Testimonial from "./homeComponents/Testimonial";
import Notes from "./homeComponents/Notes";
import CardList from "./homeComponents/CardList";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Testimonial />
      <Notes />
      <CardList />
    </>
  );
};

export default Home;
