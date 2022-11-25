import React from "react";
import "./About.css";
import photo from "./about-photo.png";

function About() {
  return (
    <div className="aboutContainer">
      <img
        src={photo}
        alt="Candace with her granddaughter"
        className="aboutImg"
      />
      <p className="aboutText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa enim quo
        corrupti iure, ut, fuga blanditiis eius maiores dolorem tempora dicta
        exercitationem perspiciatis cupiditate, quia omnis necessitatibus.
        Sequi, quasi, quod alias suscipit recusandae blanditiis mollitia odit
        debitis atque nostrum ipsum reiciendis praesentium officiis modi laborum
        minus laboriosam doloremque, explicabo dolore!
      </p>
    </div>
  );
}

export default About;
