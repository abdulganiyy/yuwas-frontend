import React from "react";
import Slider from "../../components/Slider/Slider";
import Hook from "../../assets/hook.png";
import apartment from "../../assets/apartment.png";
import condo from "../../assets/condo.png";
import building from "../../assets/building.png";

import Tabs from "../../components/Tabs/Tabs";
import Projects from "../../components/Projects/Projects";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="about">
        <div className="about-detail">
          <div className="about-imageholder">
            <img src={Hook} alt="building" className="about-image" />
          </div>
          <h3 className="tertiary-heading">Construction</h3>
          <p>
            we believe in engineering and construction that are out of ordinary.
            Something that is thoughtful, valuable, enduring and can move
            people. We are involved in a wide variety of building construction
            type ranging from office building to residential and more.
          </p>
        </div>
        <div className="about-detail">
          <div className="about-imageholder">
            <img src={apartment} alt="building" className="about-image" />
          </div>
          <h3 className="tertiary-heading">Architecture Design</h3>
          <p>
            We provide architectural designs for any kind of construction and
            building project ranging from low rise to high rise buildings. Our
            architectural designs are state-of-the-art designs prefectly created
            to suit the taste of our clients.
          </p>
        </div>
        <div className="about-detail">
          <div className="about-imageholder">
            <img src={building} alt="building" className="about-image" />
          </div>
          <h3 className="tertiary-heading">Project Management</h3>
          <p>
            Yuswas project management is a project management section/unit of
            Yuswas Invesments Limited. The unit involves herself in project
            management and consulting. The project management arm assists our
            clients (individual and corporate bodies) to manage any type of
            projects.
          </p>
        </div>
        <div className="about-detail">
          <div className="about-imageholder">
            <img src={condo} alt="building" className="about-image" />
          </div>
          <h3 className="tertiary-heading">Home Renovation</h3>
          <p>
            We offer renovation services ranging from electrical
            repairs,plumbing, repainting, interior decorations for various
            building and construction projects.
          </p>
        </div>
      </section>
      <section className="services">
        <div className="service">
          <div className="service-imageholder">
            <img src={condo} alt="building" className="about-image" />
          </div>
          <div className="service-detail">
            <h3 className="tertiary-heading">Expert & Professional</h3>
            <p>
              Our professionals are experts of the building and construction
              business.
            </p>
          </div>
        </div>
        <div className="service service_second">
          <div className="service-imageholder">
            <img src={condo} alt="building" className="about-image" />
          </div>
          <div className="service-detail">
            <h3 className="tertiary-heading">Expert & Professional</h3>
            <p>
              Our professionals are experts of the building and construction
              business.
            </p>
          </div>
        </div>
        <div className="service service_third">
          <div className="service-imageholder">
            <img src={condo} alt="building" className="about-image" />
          </div>
          <div className="service-detail">
            <h3 className="tertiary-heading">Expert & Professional</h3>
            <p>
              Our professionals are experts of the building and construction
              business.
            </p>
          </div>
        </div>
      </section>
      <section className="missions-container">
        <div className="mission-imgcover"></div>
        <div className="missions">
          <h4>Welcome to Yuswas</h4>
          <h3>We turn our imagination into reality</h3>
          <Tabs />
        </div>
      </section>
      <section className="counters">
        <div className="counters_container_one">
          <div className="counter">
            <h1>13</h1>
            <div>
              <h2>YEARS OF</h2>
              <h2>EXPERIENCE</h2>
            </div>
          </div>
          <div className="counter">
            <h1>30</h1>
            <div>
              <h2>PROJECTS</h2>
              <h2>DONE</h2>
            </div>
          </div>
        </div>
        <div className="counters_container_two">
          <div className="counter">
            <h1>20</h1>
            <div>
              <h2>PROFESSIONAL</h2>
              <h2>EXPERT</h2>
            </div>
          </div>
          <div className="counter">
            <h1>30</h1>
            <div>
              <h2>MACHINERIES</h2>
              <h2>EQUIPMENT</h2>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <section className="email-subscription">
        <h1 className="subscribe-heading">Subcribe to our Newsletter</h1>
        <div className="subscription-formcontainer">
          <form className="subscription-form">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="subscription-input"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
