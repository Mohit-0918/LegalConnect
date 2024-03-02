import React, { useState } from "react";
import logo from "../resources/legallogo.jpg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
   
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GroupsIcon from '@mui/icons-material/Groups';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {
        text: "home",
        icon: <HomeIcon />,
      },
      {
        text: "About",
        icon: <InfoIcon />,
      },
      /*{ 
        text: "connect",
        icon: <GroupsIcon />,
      },*/
      {
        text: "Testimonials",
        icon: <CommentRoundedIcon />,
      },
      {
        text: "Contact",
        icon: <PhoneRoundedIcon/>,
      },
     
    ];
    return (
      <nav>
        <div className="navbar-logo-container">
            <img src={logo} alt=""/>
        </div>
        <div className="navbar-links-container">
          <a href="">Home</a>
          <a href="">About us</a>
          
          <a href="">Testimonials</a>
          <a href="">Contact</a>
          
          <button className="primary-button">Login</button>
        </div>
        <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      
    </nav>
  );
};

export default Navbar;








