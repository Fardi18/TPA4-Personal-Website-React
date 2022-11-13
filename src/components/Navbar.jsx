import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "navbar navbar-expand-lg fixed-top navbar-dark nav-bg" : "navbar navbar-expand-lg fixed-top navbar-dark"}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to={"/"}>
          Fardi.
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active mx-1" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1 text-white" to={"/portofolio"}>
                Portofolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1" to={"/services"}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1" to={"/blog"}>
                Blog
              </Link>
            </li>
          </ul>
          <div className="social">
            {/* <a className="text-white" href="https://github.com/Fardi18?tab=repositories">
              <i className="fa-brands fa-linkedin-in fs-5"></i>
            </a> */}
            <a className="text-white" href="https://github.com/Fardi18?tab=repositories">
              <i className="fa-brands fa-github fs-5 mx-3"></i>
            </a>
            <a className="text-white" href="https://www.instagram.com/fardi_nasution/?hl=id">
              <i className="fa-brands fa-instagram fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
