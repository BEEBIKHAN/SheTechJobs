/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ExportContext from "../contexts/Context";
import LOGO from "../assets/images/LOGO.png";
import myspace from "../assets/images/myspace.png";
import cv from "../assets/images/cv.png";
import annonce from "../assets/images/annonce.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const { infoCompany } = useContext(ExportContext.Context);
  console.info("Info company du context :", infoCompany);

  const { info } = useContext(ExportContext.Context);

  const displayLinkCandidate = () => {
    if (info.Role === "candidate") {
      return (
        <Link to="/dashboardcandidate" className="navbar-link">
          <img className="imageicon" src={myspace} alt="" />
          Mon espace
        </Link>
      );
    }
    return (
      <Link to="/registercandidate" className="navbar-link">
        <img className="imageicon" src={myspace} alt="" />
        Mon espace
      </Link>
    );
  };

  const displayLinkCompany = () => {
    if (info.Role === "company") {
      return (
        <Link to="/dashboardcompany" className="navbar-link">
          {" "}
          Espace Entreprises
        </Link>
      );
    }
    return (
      <Link to="/registercompany" className="navbar-link">
        Espace Entreprises
      </Link>
    );
  };

  console.info(info);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logonavbar">
        <a href="/">
          <img className="logoSTJ" src={LOGO} alt="" />
        </a>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <div className="navbartop">
          <li className="nav-itemtop">
            <img className="imageiconCV" src={cv} alt="" />
            Mon CV
          </li>
          <div className="blueline" />
          <li className="nav-itemtop">
            <img className="imageicon" src={annonce} alt="" />
            Mes annonces
          </li>

          <div className="blueline" />
          {/* <li className="nav-itemtop"> */}
          <li className="nav-itemtop">{displayLinkCandidate()}</li>
          {/* </li> */}
        </div>
        <div className="navbarbottom">
          <ul className="nav2">
            <li className="nav-itembottom">Emplois en CDI</li>
            <li className="nav-itembottom"> Emplois en CDD</li>
            <li className="nav-itembottom">Contrats pro / alternance</li>
            <li className="nav-itembottom">Stages</li>
          </ul>
          <div className="btn">
            <button type="button" className="btnEspaceEntreprise">
              {displayLinkCompany()}
            </button>
          </div>
        </div>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}
export default Navbar;
