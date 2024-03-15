import React from "react";
import ProfilePic from "../resources/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I was struggling to find clients for my firm but with this, 
        I have access to clients from all industries and have been able to get 
        a steady flow of work from the platform. I have and will continue to recommend
        this platform to all my colleagues.
        
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Rajveer Nanda</h2>
      </div>
    </div>
  );
};

export default Testimonial;