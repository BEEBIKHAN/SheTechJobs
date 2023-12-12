import React, { useState } from "react";
import MonEspace from "../components/MonEspace";
import MonCv from "../components/MonCv";
import CandidateAccountManagement from "../components/CandidateAccountManagement";
import CandidateMyApplications from "../components/CandidateMyApplications";

export default function DashboardCandidate() {
  const [displayMonespace, setDisplayMonespace] = useState(1);
  const [displayMonCv, setDisplayMonCv] = useState(false);
  const [displayMyApplications, setDisplayMyApplications] = useState(false);
  const [displayAccountManagement, setDisplayAccountManagement] =
    useState(false);

  const handleButtonClick = (componentNumber) => {
    setDisplayMonespace(componentNumber === 1);
    setDisplayMonCv(componentNumber === 2);
    setDisplayMyApplications(componentNumber === 3);
    setDisplayAccountManagement(componentNumber === 4);
  };
  return (
    <div className="principal_dasboard">
      <div className="dashboard_Candidate">
        <ul className="nav_candidate">
          <li className="option">
            <button
              type="button"
              className="btn_DashCandidate"
              onClick={() => handleButtonClick(1)}
            >
              Mon Espace
            </button>
          </li>
          <li className="option">
            <button
              type="button"
              className="btn_DashCandidate"
              onClick={() => handleButtonClick(2)}
            >
              Mon CV
            </button>
          </li>
          <li className="option">
            <button
              type="button"
              className="btn_DashCandidate"
              onClick={() => handleButtonClick(3)}
            >
              Mes Candidatures
            </button>
          </li>

          <li className="option">
            <button
              type="button"
              className="btn_DashCandidate"
              onClick={() => handleButtonClick(4)}
            >
              Gérer mon compte
            </button>
          </li>
        </ul>
      </div>

      <div className="centered-dashcandidatecomponents">
        {displayMonespace && <MonEspace />}
        {displayMonCv && <MonCv />}
        {displayMyApplications && <CandidateMyApplications />}
        {displayAccountManagement && <CandidateAccountManagement />}
      </div>
    </div>
  );
}
