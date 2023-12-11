import React, { useState } from "react";
import MonEspace from "../components/MonEspace";
import MonCv from "../components/MonCv";

export default function DashboardCandidate() {
  const [displayMonespace, setDisplayMonespace] = useState(1);
  const [displayMonCv, setDisplayMonCv] = useState(false);
  const handleButtonClick = (componentNumber) => {
    setDisplayMonespace(componentNumber === 1);
    setDisplayMonCv(componentNumber === 2);
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
            <button type="button" className="btn_DashCandidate">
              Mes Candidatures
            </button>
          </li>

          <li className="option">
            <button type="button" className="btn_DashCandidate">
              Gérer mon compte
            </button>
          </li>
        </ul>
      </div>

      <div className="centered-dashcandidatecomponents">
        {displayMonespace && <MonEspace />}
        {displayMonCv && <MonCv />}
      </div>
    </div>
  );
}
