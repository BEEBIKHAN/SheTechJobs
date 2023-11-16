/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <FaHome className="icon" />
            Homepage
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mycv">
            <FaFileAlt className="icon" />
            Mon CV
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mypostings">
            <FaBriefcase className="icon" />
            Mes annonces
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/myalerts">
            <FaBell className="icon" />
            Mes alertes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Mon-Espace">
            <FaUser className="icon" />
            Mon espace
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}

export default Navbar;
