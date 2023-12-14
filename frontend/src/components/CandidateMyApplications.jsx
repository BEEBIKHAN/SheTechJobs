import { useState, useEffect } from "react";
import axios from "axios";
import ApplicationByCandidate from "./ApplicationByCandidate";

export default function CandidateMyApplications() {
  const [data, setData] = useState([]);
  const candidateId = localStorage.getItem("id");

  console.info("Voici l'id de la candidate", candidateId);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/applications-by-candidate/${candidateId}`
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);
  console.info("data :", data);

  return (
    <div className="myapplicationscontent">
      <div className="applicationList">
        {data.map((application) => (
          <div className="EspaceCandidateApplicationCard">
            <ApplicationByCandidate
              key={application.id}
              applicationCard={application}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
