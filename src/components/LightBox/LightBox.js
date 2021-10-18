import React from "react";

import "./LightBox.css";

const LightBox = ({ photos, show, showHandler }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const nextSlide = () => {
    if (activeSlide >= photos.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide <= 0) {
      setActiveSlide(photos.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  return (
    <div className={show ? "lightbox show" : "lightbox"}>
      <span class="closecursor" onClick={() => showHandler()}>
        &times;
      </span>
      <div className="lightbox-imagescontainer">
        {photos.map((photo, index) => {
          return (
            <img
              src={photo}
              alt="project"
              className={activeSlide === index ? "img showSlide" : "img"}
            />
          );
        })}
      </div>
      <span class="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span class="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default LightBox;
