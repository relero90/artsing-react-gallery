import React from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <header>
      <div className="headerTitle">
        <h1 className="title">Candace Greenburg</h1>
        <h3>Local Artist - Tucson, AZ</h3>
      </div>
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
