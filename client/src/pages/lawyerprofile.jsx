import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import "../CSS/lawyerprofile.css";
import BannerBackground from "../resources/home-banner-background.png";
import ProfilePic from "../resources/john-doe-image.png";
import Footer from "../components/Footer";

const PersonalProfile = () => {
  return (
    <div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="wrapper">
        <div className="profile">
          <p>MY PROFILE</p>
          <img src={ProfilePic} alt="" />
          <p>Name</p>
          <input id="LN" placeholder="Name" type="text" />
          <p>Rating</p>

          <input id="LN" placeholder="Rating.." type="text" />
        </div>
        <div className="caseType">
          <p>DESCRIPTION</p>
          <div className="card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PersonalProfile;








