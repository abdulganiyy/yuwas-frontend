import React from "react";
import "./Projects.css";
import Project1Photo1 from "../../assets/newuba1.jpg";
import Project1Photo2 from "../../assets/newuba2.jpg";
import Project1Photo3 from "../../assets/newuba3.jpg";
import Project1Photo4 from "../../assets/newuba4.jpg";
import Project1Photo5 from "../../assets/newuba5.jpg";
import Project1Photo6 from "../../assets/newuba6.jpg";
import Project2Photo1 from "../../assets/newuba7.jpg";
import Project2Photo2 from "../../assets/newuba8.jpg";
import Project2Photo3 from "../../assets/newuba9.jpg";
import Project2Photo4 from "../../assets/newuba10.jpg";
import Project2Photo5 from "../../assets/newuba11.jpg";
import Project2Photo6 from "../../assets/newuba12.jpg";
import Project3Photo1 from "../../assets/newuba13.jpg";
import Project3Photo2 from "../../assets/newuba14.jpg";
import Project3Photo3 from "../../assets/newuba15.jpg";
import Project3Photo4 from "../../assets/newuba16.jpg";
import Project4Photo1 from "../../assets/newuba17.jpg";
import Project4Photo2 from "../../assets/newuba18.jpg";
import Project4Photo3 from "../../assets/newuba19.jpg";
import Project4Photo4 from "../../assets/newuba20.jpg";
import Project5Photo1 from "../../assets/mosque.jpg";

// import LightBox from "../LightBox/LightBox";
import Project from "./Project/Project";

const Projects = () => {
  return (
    <div className="projects">
      <Project
        name={
          "Business office for UBA Plc, UBA Katsina 1 Business Office, Katsina"
        }
        cover={Project1Photo1}
        photos={[
          Project1Photo1,
          Project1Photo2,
          Project1Photo3,
          Project1Photo4,
          Project1Photo5,
          Project1Photo6,
        ]}
      />
      <Project
        name={
          " UBA Pensions custodian Ltd Head Office at Idowun taylor Victoria Island Lagos"
        }
        cover={Project2Photo1}
        photos={[
          Project2Photo1,
          Project2Photo2,
          Project2Photo3,
          Project2Photo4,
          Project2Photo5,
          Project2Photo6,
        ]}
      />
      <Project
        name={" UBA Service Center Ilorin"}
        cover={Project3Photo1}
        photos={[
          Project3Photo1,
          Project3Photo2,
          Project3Photo3,
          Project3Photo4,
        ]}
      />
      <Project
        name={" Uba Plc 52 Adetokumbo Ademola crescent, wuse 2 Abuj"}
        cover={Project4Photo1}
        photos={[
          Project4Photo1,
          Project4Photo2,
          Project4Photo3,
          Project4Photo4,
        ]}
      />
      <Project
        name={" Ogo Oluwa Community Central Mosque"}
        cover={Project5Photo1}
        photos={[Project5Photo1]}
      />
    </div>
  );
};

export default Projects;
