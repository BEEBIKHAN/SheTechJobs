/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import contracticon from "../assets/icons/contracticon.png";
import depticon from "../assets/icons/depticon.png";

export default function ApplicationCard({ application }) {
  console.info(application);
  return (
    <div className="applicationCardb">
      <div className="wholeapplicationcardb">
        <div className="offertitleb">
          <h3>{application.offertitle}</h3>
        </div>

        <div className="jobnameb">
          <p>
            <strong> {application.jobname}</strong>
          </p>
        </div>
        <div className="offerdateb">
          <h4>Published {moment(application.date).fromNow()}</h4>
        </div>
        <div className="departementnameb">
          <p>
            <img className="logodeptb" src={depticon} alt="" />
            <strong> {application.departementname}</strong>
          </p>
        </div>
        <div className="contract_typeb">
          <p>
            <img className="logocontractb" src={contracticon} alt="" />
            <strong> {application.type}</strong>
          </p>
        </div>
      </div>
      <div className="candidateb">
        <p>
          <strong>Candidate Name:</strong> {application.firstname}
        </p>
        <div className="cvlinkb">
          <Link
            to={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
              application.cv_link
            }`}
          >
            Click here to Download Cv
          </Link>
        </div>
        <div className="motivationsb">
          <p>
            <strong>Motivations: </strong> {application.motivations}
          </p>
        </div>
      </div>
    </div>
  );
}
