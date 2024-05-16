import React from "react";
import "../style.css";
import Logo from "../img/webhub3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="links" to="/?web=art">
            <h6>ART</h6>
          </Link>
          <Link className="links" to="/?web=art">
            <h6>ART</h6>
          </Link>
          <Link className="links" to="/?web=art">
            <h6>ART</h6>
          </Link>
          <Link className="links" to="/?web=art">
            <h6>ART</h6>
          </Link>
          <Link className="links" to="/?web=art">
            <h6>ART</h6>
          </Link>
          <Link className="links" to="/?web=art">
            <h6>ART</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
