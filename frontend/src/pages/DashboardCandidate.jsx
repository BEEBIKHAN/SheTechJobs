/* eslint-disable no-unused-expressions */
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MonEspace from "../components/MonEspace";
import MonCv from "../components/MonCv";
import CandidateAccountManagement from "../components/CandidateAccountManagement";
import CandidateMyApplications from "../components/CandidateMyApplications";
import ExportContext from "../contexts/Context";

export default function DashboardCandidate() {
  const { info, resetInfo } = useContext(ExportContext.Context);
  const [displayMonespace, setDisplayMonespace] = useState(1);
  const [displayMonCv, setDisplayMonCv] = useState(false);
  const [displayMyApplications, setDisplayMyApplications] = useState(false);
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
        console.info("After logout:", info);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleButtonClick = (componentNumber) => {
    setDisplayMonespace(componentNumber === 1);
    setDisplayMonCv(componentNumber === 2);
    setDisplayMyApplications(componentNumber === 3);
    setDisplayAccountManagement(componentNumber === 4);
  };

  useEffect(() => {
    info;
  }, [displayMonespace]);

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
          <div className="logoutBtn">
            <Link to="/">
              <button className="logoutBtn" type="button" onClick={deconnect}>
                Se déconnecter
              </button>
            </Link>
          </div>
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
