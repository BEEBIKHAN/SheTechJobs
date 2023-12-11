/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import depticon from "../assets/icons/location icon.png";
import contracticon from "../assets/icons/contract type icon.png";
import dateicon from "../assets/icons/calender.png";

export default function ApplicationCard({ application }) {
  return (
    <div className="applicationCard">
      <div className="offertitle">
        <h3>{application.offer_title}</h3>
      </div>

      <div className="jobname">
        <p>
          <strong> </strong> {application.job_name}
        </p>
      </div>
      <div className="offerdate">
        <img className="dateicon" src={dateicon} alt="" />
        <h4> {new Date(application.offer_date).toLocaleDateString()}</h4>
      </div>
      <div className="departementname">
        <p>
          <img className="logodept" src={depticon} alt="" />
          <strong> </strong> {application.department_name}
        </p>
      </div>
      <div className="contract_type">
        <p>
          <img className="logocontract" src={contracticon} alt="" />
          <strong> </strong> {application.contract_type}
        </p>
      </div>
      <div className="candidate">
        <p>
          <strong>Candidate Name: </strong> {application.candidate_firstname}
        </p>

        <div className="cvlink">
          <p>
            <strong> </strong>{" "}
            <a
              href={application.candidate_cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </p>
        </div>
        <div className="motivations">
          <p>
            <strong>Motivations: </strong> {application.application_motivations}
          </p>
        </div>
      </div>
    </div>
  );
}
