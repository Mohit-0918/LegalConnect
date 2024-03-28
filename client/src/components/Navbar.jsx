import React, { useContext, useState } from "react";
import logo from "../resources/LegalConnectshort.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const RenderMenu = () => {
    return (
      <>
        <div className="navbar-links-container">
          <a href="/nav/home" onClick={() => scrollToSection("Home")}>
            <HomeIcon />
            Home
          </a>
          <a href="/nav/about" onClick={() => scrollToSection("about")}>
            <InfoIcon />
            About
          </a>
          <a href="/nav/testomonial" onClick={() => scrollToSection("Testimonials")}>
            <CommentRoundedIcon />
            Testimonials
          </a>
          <a href="/nav/contact" onClick={() => scrollToSection("Contact")}>
            <PhoneRoundedIcon />
            Contact
          </a>
          <button
            className="primary-button"
            onClick={() => {
              navigate("/loginIndex");
            }}
          >
            {state ? "Logout" : "Login"}
          </button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
      </>
    )

  }


  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="" />
      </div>
      <RenderMenu />
    </nav>
  );
};

export default Navbar;









