import React, { useState } from "react";
import "./Gallery.css";

import filler from "./images/artsy-filler.jpeg";

import projects from "./project-data";

function Gallery() {
  const [project, setProject] = useState(projects[0]);

  const displayNextProject = () => {
    // if we are not at the end of the array
    if (project.index < projects.length - 1) {
      // move to the next array member
      setProject(projects[project.index + 1]);
      return;
    } else {
      // move to the first array member
      setProject(projects[0]);
      return;
    }
  };
  const displayPreviousProject = () => {
    // if we are not at the beginning of the array
    if (project.index > 0) {
      // move to the previous array member
      setProject(projects[project.index - 1]);
    } else {
      // move to the final array member
      setProject(projects[projects.length - 1]);
    }
  };

  return (
    <div className="gallery">
      <button className="galleryBtn" onClick={displayPreviousProject}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <div className="projectCard">
        <img
          className="projectImg"
          src={filler}
          alt="artsy fartsy filler"
        ></img>
        <div className="projectTextDiv">
          <h5 className="title">{project.title}</h5>
          <p className="projectDescription">{project.description}</p>
        </div>
      </div>
      <button className="galleryBtn" onClick={displayNextProject}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Gallery;
