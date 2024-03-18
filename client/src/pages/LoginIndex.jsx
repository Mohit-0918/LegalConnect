import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import logo from "../resources/LegalConnectshort.png";
import BannerBackground from "../resources/home-banner-background.png";

import { FaBlackTie } from 'react-icons/fa';
export default function LoginIndex() {
    const navigate = useNavigate();
  return (
   <div>
    <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
     <div style={{  display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center",marginTop:"30px"}}>
     <div className="navbar-logo-container" style={{marginTop: "10px"}}>
            <img src={logo} alt=""/>
        </div>
        <p style={{padding:"4",fontVariant: "all-petite-caps",fontSize:"40px",marginTop:"50px",}}>Choose what you want to be</p>
        <div style={{marginTop:"0px",display:"flex",height:"40vh","alignItems":"center", width: "100%",alignItems: "center", justifyContent: "space-around",marginTop:"90px"}}>
            <div style={{display: "flex",flexDirection: "column",rowGap: "9px",alignItems:"center",justifyContent:"center",}}>
                <h2 style={{fontSize:"32px"}}>
                    Login yourself as a User
                </h2>
                <p>Unfold your solution with Professional lawyers</p>
                <button style={{    width: "100px",height: "35px" ,border: "1px solid black",borderRadius: "20px",backgroundColor: "#FE9E0D",fontSize: "20px" ,marginTop:"25px"}} onClick={()=>{navigate("/loginuser")}}>Login</button>
            </div>
            <div style={{
      width: '1px',
      padding: '1px',
      height: '14rem',
      backgroundColor: '#f7c10f'
    }}></div>
            <div style={{display: "flex",flexDirection: "column",rowGap: "9px",alignItems:"center",justifyContent:"center"}}>
                <h2 style={{fontSize:"32px"}}>Login yourself as a Lawyer</h2>
                <p>Tell us about your query and get your solutions unfold</p>
                <button style={{    width: "100px",height: "35px" ,border: "1px solid black",borderRadius: "20px",backgroundColor: "#FE9E0D",fontSize: "20px",marginTop:"25px" }} onClick={()=>{navigate("/loginlawyer")}}>Login</button>
            </div>
        </div>
    </div>
   </div>
  )
}
