/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LOGO from "../assets/images/LOGO.png";
import myspace from "../assets/images/myspace.png";
import cv from "../assets/images/cv.png";
import annonce from "../assets/images/annonce.png";
import alerte from "../assets/images/alerte.png";
import linenavbar1 from "../assets/images/linenavbar1.png";
import "../styles/navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <div className="navbartop">
          <li className="nav-itemtop">
            <img className="imageiconCV" src={cv} alt="" />
            Mon CV
          </li>
          <img className="blueline" src={linenavbar1} alt="" />
          <li className="nav-itemtop">
            <img className="imageicon" src={annonce} alt="" />
            Mes annonces
          </li>
          <img className="blueline" src={linenavbar1} alt="" />
          <li className="nav-itemtop">
            <img className="imageicon" src={alerte} alt="" />
            Mes alertes
          </li>
          <img className="blueline" src={linenavbar1} alt="" />
          <li className="nav-itemtop">
            <img className="imageicon" src={myspace} alt="" />
            Mon espace
          </li>
        </div>
        <div className="navbarbottom">
          <ul className="nav2">
            <li className="nav-itembottom">Emplois en CDI</li>
            <li className="nav-itembottom"> Emplois en CDD</li>
            <li className="nav-itembottom">Contrats pro / alternance</li>
            <li className="nav-itembottom">Stages</li>
          </ul>
        </div>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}
export default Navbar;
