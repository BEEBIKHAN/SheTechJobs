import { useState, useEffect } from "react";
import axios from "axios";
import ApplicationCard from "./ApplicationCard";

export default function MyCandidatures() {
  const [data, setData] = useState([]);
  const companyId = localStorage.getItem("id");
  console.info("company id ", companyId);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/offers/${companyId}/applications`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div className="contentMyApplications">
      <div className="applicationList">
        {data.map((application) => (
          <div
            key={application.application_id}
            className="applicationCardContainer"
          >
            <ApplicationCard application={application} />
          </div>
        ))}
      </div>
    </div>
  );
}
