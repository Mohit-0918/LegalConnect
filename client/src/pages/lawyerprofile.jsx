import React,{ useEffect } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import "../CSS/lawyerprofile.css";  
import BannerBackground from "../resources/home-banner-background.png";
import ProfilePic from "../resources/john-doe-image.png";
import Footer from "../components/Footer";
import { useSelector } from 'react-redux';

const PersonalProfile = () => {
  const  lawyerInfo = useSelector(state=>state.user.currentUser.name);
  const city=useSelector(  state=> state.user.currentUser.practisingarea);
  console.log(city)
  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/post/${city}`);
        if (!response.ok) {
          throw new Error('Failed to fetch case details');
        }
        const data = await response.json();
        console.log('Data fetched from database:', data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCaseDetails();
  }, [city]);
  return (
    <div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <Navbar/>
      <div className="wrapper">
        <div className="profile"> 
          <p>MY PROFILE</p>
          <img src={ProfilePic} alt="" />
          <p>{lawyerInfo}</p>
          <p>{city}</p>
          <p>Rating</p>
        </div>
        <div className="caseType">
          <p>DESCRIPTION</p>
          <div className="card">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default PersonalProfile;




   
 
      

