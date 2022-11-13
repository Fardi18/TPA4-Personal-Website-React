import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Layanan from "../components/Layanan";

const Services = () => {
  return (
    <>
      <Navbar />
      <Intro heading={"Services"} description={"Layanan yang bisa saya berikan"} />
      <Layanan />
      <Footer />
    </>
  );
};
export default Services;
