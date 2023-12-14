/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import PublishOffer from "../components/PublishOffer";
import SpaceCompany from "../components/SpaceCompany";
import MyOffers from "../components/MyOffers";
import MyCandidatures from "../components/MyCandidatures";
import CompanyAccountManagement from "../components/CompanyAccountManagement";
import ExportContext from "../contexts/Context";

export default function DashboardCompany() {
  const { info, resetInfo } = useContext(ExportContext.Context);
  const [displaySpaceCompany, setDisplaySpaceCompany] = useState(1);
  const [displayPublishOffer, setDisplayPublishOffer] = useState(false);
  const [displayMyOffers, setDisplayMyOffers] = useState(false);
  const [displayMyCandidatures, setDisplayMyCandidatures] = useState(false);
  const [displayAccountManagement, setDisplayAccountManagement] =
    useState(false);
  const navigate = useNavigate();

  const deconnect = () => {
    console.info("Before logout:", info);
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/logout`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        console.info(response);
        resetInfo();
        navigate("/");
        console.info("After logout:", info);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleButtonClick = (componentNumber) => {
    setDisplaySpaceCompany(componentNumber === 1);
    setDisplayPublishOffer(componentNumber === 2);
    setDisplayMyOffers(componentNumber === 3);
    setDisplayMyCandidatures(componentNumber === 4);
    setDisplayAccountManagement(componentNumber === 5);
  };

  useEffect(() => {
    info;
  }, [displaySpaceCompany]);

  return (
    <div className="dashboardcompany">
      <div className="nav_dashboard_company">
        <ul className="ul_dashboard_company">
          <li className="middle">
            <button
              type="button"
              className="btnDashCompany"
              onClick={() => handleButtonClick(1)}
            >
              Espace Entreprise
            </button>
          </li>
          <li className="middle">
            <button
              type="button"
              className="btnDashCompany"
              onClick={() => handleButtonClick(2)}
            >
              Publier une annonce
            </button>
          </li>
          <li className="middle">
            <button
              type="button"
              className="btnDashCompany"
              onClick={() => handleButtonClick(3)}
            >
              Mes annonces
            </button>
          </li>
          <li className="middle">
            <button
              type="button"
              className="btnDashCompany"
              onClick={() => handleButtonClick(4)}
            >
              Candidatures
            </button>
          </li>
          <li className="middle">
            <button
              type="button"
              className="btnDashCompany"
              onClick={() => handleButtonClick(5)}
            >
              Gérer son compte
            </button>
          </li>
          <div className="logoutBtn">
            <Link to="/">
              <button className="logoutBtn" type="button" onClick={deconnect}>
                Se deconnecter
              </button>
            </Link>
          </div>
        </ul>
      </div>
      <div className="centered-dashcompanycomponents">
        {displaySpaceCompany && <SpaceCompany />}
        {displayPublishOffer && <PublishOffer />}
        {displayMyOffers && <MyOffers />}
        {displayMyCandidatures && <MyCandidatures />}
        {displayAccountManagement && <CompanyAccountManagement />}
      </div>
    </div>
  );
}
