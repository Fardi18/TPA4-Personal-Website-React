import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3 className="text-white fw-semibold mb-2">Holaaa</h3>
            <h1 className="text-white fw-bold mb-4">Saya Fardi Khalik Ramadhan</h1>
            <p className="text-white mb-5 text-opacity-75">
              Saya mahasiswa semester 5 Teknik Informatika di Institut Teknologi Indonesia. <br />
              Saya memiliki minat dalam UIUX Design and Front-end Development
            </p>
            <Link to={"/about"} className="btn btn-primary btn-lg rounded-1 mt-3">
              Tentang Saya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
