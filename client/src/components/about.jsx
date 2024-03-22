import React from "react";
import AboutBackground from "../resources/about-background.png";
import AboutBackgroundImage from "../resources/about.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About us</p>
        <h1 className="primary-heading">
        Meet, connect and deal with advocates with ease
        </h1>
        <p className="primary-text">
        Let us help you with our experience
        in finding lawyers for your all the legal issues including Family, Business, Civil, Criminal 
        or any other legal issue belonging to any category of the legal spectrum.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button"
          onClick={() => {
            navigate("/hirelaw");
          }}

          >Learn More</button>
         
        </div>
      </div>
    </div>
  );
};

export default About;