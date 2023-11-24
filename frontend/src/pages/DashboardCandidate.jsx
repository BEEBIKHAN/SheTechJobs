import React, { useState } from "react";
import MonEspace from "../components/MonEspace";

export default function DashboardCandidate() {
  const [displayMonespace, setDisplayMonespace] = useState(false);

  const handleButtonClick = (componentNumber) => {
    setDisplayMonespace(componentNumber === 1);
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
            <button type="button" className="btn_DashCandidate">
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
              Mes Alertes
            </button>
          </li>
          <li className="gerer_compte">
            <button type="button" className="btn_DashCandidate">
              Gerer mon compte
            </button>
          </li>
        </ul>
      </div>

      <div className="centered-dashcandidatecomponents">
        {displayMonespace && <MonEspace />}
      </div>
    </div>
  );
}
