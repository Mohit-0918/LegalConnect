import React, { useContext, useState } from "react";
import logo from "../resources/LegalConnectshort.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userslice";
const Navbar = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(state=>state.user.currentUser)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleLogout=()=>{
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="" />
      </div>
      <>
        <div className="navbar-links-container">
            <a href="#" onClick={() => scrollToSection("Home")}>
              <HomeIcon />
              Home
            </a>
            <a href="#" onClick={() => scrollToSection("about")}>
              <InfoIcon />
              About
            </a>
            <a href="#" onClick={() => scrollToSection("Testimonials")}>
              <CommentRoundedIcon />
              Testimonials
            </a>
            <a href="#" onClick={() => scrollToSection("Contact")}>
              <PhoneRoundedIcon />
              Contact
            </a>
            {currentUser?(<button
              className="primary-button"
              onClick={() => {handleLogout()}}
            >
              Logout
            </button>
            ):
            (<button
              className="primary-button"
              onClick={() => {
                navigate("/loginIndex");
              }}
            >
              Login
            </button>)}
          </div>
        </>
    </nav>
  );
};

export default Navbar;
