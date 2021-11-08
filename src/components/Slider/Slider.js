import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import img1 from "../../assets/building-2.jpg";
import img2 from "../../assets/building-3.jpg";
import img3 from "../../assets/building-4.jpg";

import "./Slider.css";

// const slides = [
//   { src: "", smallText: "we are here to help", bigText: "best home builder" },
//   { src: "", smallText: "best builder in th world", bigText: "we build home" },
//   { src: "", smallText: "we build your home", bigText: "professional builder" },
// ];

const Slider = () => {
  let [activeSlideIndex, setActiveSlideIndex] = useState(0);

  let timeOutRef = useRef(null);

  const resetTimeout = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [activeSlideIndex]);
  return (
    <div className="slider">
      <div
        style={{ backgroundImage: `url(${img1})` }}
        className={activeSlideIndex === 0 ? "slide" : "slide slide-hidden"}
      >
        <h2>At Yuswas Investments</h2>
        <h1>
          {" "}
          We believe in engineering and construction that are out of ordinary
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(${img2})` }}
        className={activeSlideIndex === 1 ? "slide" : "slide slide-hidden"}
      >
        <h2>At Yuswas Investments</h2>
        <h1>We assist to manage any type of projects</h1>
      </div>
      <div
        style={{ backgroundImage: `url(${img3})` }}
        className={activeSlideIndex === 2 ? "slide" : "slide slide-hidden"}
      >
        <h2>At Yuswas Investments</h2>
        <h1>We are involved in a wide variety of building construction type</h1>
      </div>
    </div>
  );
};

export default Slider;
