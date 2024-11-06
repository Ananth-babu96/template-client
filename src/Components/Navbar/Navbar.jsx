import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navbar_logo">
            <h1>
               G<span>studios</span>
            </h1>
         </div>
         <div className="navbar_menu">
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default Navbar;
