import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
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
      <div className="annonce_listOffer">
        {data.map((application) => (
          <div className="EspaceCandidateApplicationCard">
            {/* <Link key={application.id} to={`/annonceDetails/${offer.id}`}> */}
            <ApplicationByCandidate
              key={application.id}
              applicationCard={application}
            />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
