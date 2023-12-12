/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from "react";
import PublishOffer from "../components/PublishOffer";
import SpaceCompany from "../components/SpaceCompany";
import MyOffers from "../components/MyOffers";
import CompanyAccountManagement from "../components/CompanyAccountManagement";
import ExportContext from "../contexts/Context";

export default function DashboardCompany() {
  const { info } = useContext(ExportContext.Context);
  const [displaySpaceCompany, setDisplaySpaceCompany] = useState(1);
  const [displayPublishOffer, setDisplayPublishOffer] = useState(false);
  const [displayMyOffers, setDisplayMyOffers] = useState(false);
  const [displayAccountManagement, setDisplayAccountManagement] =
    useState(false);

  const handleButtonClick = (componentNumber) => {
    setDisplaySpaceCompany(componentNumber === 1);
    setDisplayPublishOffer(componentNumber === 2);
    setDisplayMyOffers(componentNumber === 3);
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
            <button type="button" className="btnDashCompany">
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
        </ul>
      </div>
      <div className="centered-dashcompanycomponents">
        {displaySpaceCompany && <SpaceCompany />}
        {displayPublishOffer && <PublishOffer />}
        {displayMyOffers && <MyOffers />}
        {displayAccountManagement && <CompanyAccountManagement />}
      </div>
    </div>
  );
}
