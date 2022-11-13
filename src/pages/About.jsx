import React from "react";
import Aboutme from "../components/Aboutme";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Intro heading={"About Me"} description={"Yes, this is about ME"} />
      <Aboutme />
      <Footer />
    </>
  );
};
export default About;
