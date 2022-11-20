import React from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <header>
      <h1>Candace Greenburg - Sculptor & Local Artist</h1>
      <h3>Tucson, AZ</h3>
      <div className="navBar">
        <Link to="/">
          <button className="navBtn">About</button>
        </Link>
        <Link to="/gallery">
          <button className="navBtn">Gallery</button>
        </Link>
        <Link to="/contact">
          <button className="navBtn">Contact</button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderNav;
