import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portofolio from "./pages/Portofolio";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
