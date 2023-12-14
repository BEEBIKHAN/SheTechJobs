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

  const handleClick = () => setClick(!click);

  console.info(info);

  return (
    <div
      className={
        info.Role === "candidate" || info.Role === "null"
          ? "navbar"
          : "navbarCompany"
      }
    >
      <div className="logonavbar">
        <Link to="/">
          <img className="logoSTJ" src={LOGO} alt="" />
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {info.Role === "candidate" || info.Role === null ? (
          <div className="navbartop">
            <li className="nav-itemtop">
              <img className="imageiconCV" src={cv} alt="" />
              Mon CV
            </li>
            <div className="blueline" />
            <li className="nav-itemtop">
              <img className="imageicon" src={annonce} alt="" />
              Mes candidatures
            </li>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {info.Role === "candidate" ? (
          <>
            <div className="navbartop">
              <Link to="/mycv">
                <li className="nav-itemtop">
                  <img className="imageiconCV" src={cv} alt="" />
                  Mon CV
                </li>
              </Link>
              <div className="blueline" />
              <Link to="/myapplications">
                <li className="nav-itemtop">
                  <img className="imageicon" src={annonce} alt="" />
                  Mes candidatures
                </li>
              </Link>
              <div className="blueline" />
              <li className="nav-itemtop">{displayLinkCandidate()}</li>
            </div>
            <div className="navbarbottom">
              <ul className="nav2">
                <li className="nav-itembottom">
                  <a href="/search/type/cdi">Emplois en CDI</a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/cdd"> Emplois en CDD </a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/alternance">
                    {" "}
                    Contrats pro / alternance{" "}
                  </a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/stages"> Stages </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
        {info.Role === "company" ? (
          <>
            <div className="logonavbar">
              <Link to="/">
                <img className="logoSTJ" src={LOGO} alt="" />
              </Link>
            </div>
            <div className="navbarbottom">
              <ul className="nav2">
                <li className="nav-itembottom">
                  <a href="/search/type/cdi">Emplois en CDI</a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/cdd"> Emplois en CDD </a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/alternance">
                    {" "}
                    Contrats pro / alternance{" "}
                  </a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/stages"> Stages </a>
                </li>
              </ul>
              <div className="btn">
                <button type="button" className="btnEspaceEntreprise">
                  {displayLinkCompany()}
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {info.Role === "null" ? (
          <>
            <div className="genericNavbar">
              <div className="navbartop">
                <div className="loginDiv">
                  <Link to="/logincandidate">
                    <button className="loginBtn" type="button">
                      Se connecter
                    </button>
                  </Link>
                </div>
                <div className="blueline" />
                <li className="nav-itemtop">
                  <img className="imageiconCV" src={cv} alt="" />
                  Mon CV
                </li>
                <div className="blueline" />
                <li className="nav-itemtop">
                  <img className="imageicon" src={annonce} alt="" />
                  Mes candidatures
                </li>

                <div className="blueline" />
                <li className="nav-itemtop">{displayLinkCandidate()}</li>
              </div>
            </div>
            <div className="navbarbottom">
              <ul className="nav2">
                <li className="nav-itembottom">
                  <a href="/search/type/cdi">Emplois en CDI</a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/cdd"> Emplois en CDD </a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/alternance">
                    {" "}
                    Contrats pro / alternance{" "}
                  </a>
                </li>
                <li className="nav-itembottom">
                  <a href="/search/type/stages"> Stages </a>
                </li>
              </ul>
              <div className="btnNavgeneric">
                <button type="button" className="btnEspaceEntreprise">
                  {displayLinkCompany()}
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
}
export default Navbar;
