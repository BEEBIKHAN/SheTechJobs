/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaBriefcase,
  FaFileAlt,
  FaUser,
  FaHome,
} from "react-icons/fa";
import LOGO from "../assets/images/LOGO.png";
import "../styles/navbar_top.css";

// ------------- Navbar top--------------------//

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="/" />
          <FaHome className="icon" />
          Homepage
        </li>
        <li className="nav-item">
          <a href="/" />
          <FaFileAlt className="icon" />
          Mon CV
        </li>
        <li className="nav-item">
          <a href="/" />
          <FaBriefcase className="icon" />
          Mes annonces
        </li>
        <li className="nav-item">
          <a href="/" />
          <FaBell className="icon" />
          Mes alertes
        </li>
        <li className="nav-item">
          <a href="/" />
          <FaUser className="icon" />
          Mon espace
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}

export default Navbar;
