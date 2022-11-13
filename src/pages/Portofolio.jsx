import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Porto from "../components/Porto";

const Portofolio = () => {
  return (
    <>
      <Navbar />
      <Intro heading={"Portofolio"} description={"Project yang telah saya selesaikan"} />
      <Porto />
      <Footer />
    </>
  );
};
export default Portofolio;
