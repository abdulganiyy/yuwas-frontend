import React from "react";
import "./Projects.css";
import Project1Photo1 from "../../assets/uba1.jpeg";
import Project1Photo2 from "../../assets/uba2.jpeg";
import Project1Photo3 from "../../assets/uba3.jpeg";
import Project1Photo4 from "../../assets/uba4.jpeg";

import LightBox from "../LightBox/LightBox";

const Projects = () => {
  const [show, setShow] = React.useState(false);

  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className="projects">
      <div className="project">
        <img
          src={Project1Photo1}
          alt="project-coverimage"
          className="project-coverimage"
        />
        <div className="project-detail">
          <span className="modal-opener" onClick={() => showHandler()}>
            view project
          </span>
          <h2>Construction</h2>
          <h3>UBA Service Center Ilorin</h3>
        </div>
        <LightBox
          photos={[
            Project1Photo1,
            Project1Photo2,
            Project1Photo3,
            Project1Photo4,
          ]}
          show={show}
          showHandler={showHandler}
        />
      </div>
    </div>
  );
};

export default Projects;
