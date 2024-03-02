import React from "react";
import BannerBackground from "../resources/home-banner-background.png";
import BannerImage from "../resources/home-banner-image 2.jpg"
import Navbar from "../components/Navbar.jsx";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Legal Connect 
            
          </h1>

          <h2 className="primary-subheading-heading">
            Where Law Meets Connection, Solutions Unfold
            
          </h2>

          <p className="primary-text">
          
          We provide assistance to those seeking help navigating the complexities of getting legal help.
           Don’t go at it alone. 
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
