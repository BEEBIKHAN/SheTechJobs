import { useState, useEffect } from "react";
import axios from "axios";
import ApplicationCard from "./ApplicationCard";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/applicationsbyoffer`)
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div className="contentMyApplications">
      <div className="applicationList">
        {applications.map((application) => (
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
