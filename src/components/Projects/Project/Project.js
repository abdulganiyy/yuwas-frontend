import React from "react";

import "./Project.css";

import LightBox from "../../LightBox/LightBox";

const Project = ({ name, cover, photos }) => {
  const [show, setShow] = React.useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className="project">
      <img
        src={cover}
        alt="project-coverimage"
        className="project-coverimage"
      />
      <div className="project-detail">
        <span className="modal-opener" onClick={() => showHandler()}>
          view project
        </span>
        <h2>Construction</h2>
        <h3>{name}</h3>
      </div>
      <LightBox photos={photos} show={show} showHandler={showHandler} />
    </div>
  );
};

export default Project;
