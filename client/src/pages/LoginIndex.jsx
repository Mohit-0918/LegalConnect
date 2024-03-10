import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function LoginIndex() {
    const navigate = useNavigate();
  return (
    <div style={{  display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center",marginTop:"50px"}}>
        <p style={{fontVariant: "all-petite-caps",fontSize:"40px"}}>Choose what you want to be</p>
        <div style={{marginTop:"0px",display:"flex",height:"80vh","alignItems":"center", width: "100%",alignItems: "center", justifyContent: "space-around" }}>
            <div style={{display: "flex",flexDirection: "column",rowGap: "9px",alignItems:"center",justifyContent:"center"}}>
                <h2 style={{fontSize:"32px"}}>
                    Login yourself as a User
                </h2>
                <p>Unfold your solution with Professional lawyers</p>
                <button style={{    width: "100px",height: "35px" ,border: "1px solid black",borderRadius: "20px",backgroundColor: "#d3ac2b",fontSize: "20px" ,marginTop:"25px"}} onClick={()=>{navigate("/loginuser")}}>Login</button>
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
                <button style={{    width: "100px",height: "35px" ,border: "1px solid black",borderRadius: "20px",backgroundColor: "#d3ac2b",fontSize: "20px",marginTop:"25px" }} onClick={()=>{navigate("/loginlawyer")}}>Login</button>
            </div>
        </div>
    </div>
  )
}
