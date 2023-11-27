import React, { useState } from "react";
import PublishOffer from "../components/PublishOffer";
import SpaceCompany from "../components/SpaceCompany";

export default function DashboardCompany() {
  const [displaySpaceCompany, setDisplaySpaceCompany] = useState(1);
  const [displayPublishOffer, setDisplayPublishOffer] = useState(false);

  const handleButtonClick = (componentNumber) => {
    setDisplaySpaceCompany(componentNumber === 1);
    setDisplayPublishOffer(componentNumber === 2);
  };

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
            <button type="button" className="btnDashCompany">
              Mes annonces
            </button>
          </li>
          <li className="middle">
            <button type="button" className="btnDashCompany">
              Candidatures
            </button>
          </li>
          <li className="middle">
            <button type="button" className="btnDashCompany">
              Gérer son compte
            </button>
          </li>
        </ul>
      </div>
      <div className="centered-dashcompanycomponents">
        {displaySpaceCompany && <SpaceCompany />}
        {displayPublishOffer && <PublishOffer />}
      </div>
    </div>
  );
}
