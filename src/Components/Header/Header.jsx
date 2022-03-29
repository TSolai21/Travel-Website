import React from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Header.css";
function Header() {
  return (
    <div id="Header">
      <div className="Header__logo">
        <NavLink to="/"> traveler.</NavLink>
      </div>
      <div className="Header__navbar">
        <NavLink to="/">home</NavLink>
        <NavLink to="/About"> about</NavLink>
        <NavLink to="/Packages"> Packages</NavLink>
        <NavLink to="/Book"> book</NavLink>
      </div>
      <div className="Header__menu">
        <FiMenu />
      </div>
    </div>
  );
}

export default Header;
