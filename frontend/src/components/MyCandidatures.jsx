import { useState, useEffect } from "react";
import axios from "axios";
import ApplicationCard from "./ApplicationCard";
import ApplicationDetailCard from "./ApplicationDetailCard";

export default function MyCandidatures() {
  const [data, setData] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
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
  const handleSelectApplication = (application) => {
    setSelectedApplication(application);
  };
  const handleStatusChange = () => {
    // Re-fetch applications or update state to reflect changes
    setSelectedApplication(null);
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/offers/${companyId}/applications`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) =>
        console.error("Error re-fetching applications:", error)
      );
  };

  return (
    <div className="contentMyApplications">
      {selectedApplication ? (
        <ApplicationDetailCard
          application={selectedApplication}
          onStatusChange={handleStatusChange}
        />
      ) : (
        <div className="applicationList">
          {data.map((application) => (
            <div
              key={application.application_id}
              className="applicationCardContainer"
            >
              <ApplicationCard
                application={application}
                onSelect={handleSelectApplication}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
