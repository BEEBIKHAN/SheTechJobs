import PropTypes from "prop-types";
import axios from "axios";

export default function ApplicationDetailCard({ application, onStatusChange }) {
  const updateStatus = (newStatus) => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/applicationstatus/${
          application.id
        }`,
        { application_status: newStatus }
      )
      .then((response) => {
        console.info("Status updated:", response.data);
        onStatusChange(); // Callback to update parent component
      })
      .catch((error) => console.error("Error updating status:", error));
  };
  ApplicationDetailCard.propTypes = {
    application: PropTypes.shape({
      id: PropTypes.number,
      // Include other properties of the application object here...
    }).isRequired,
    onStatusChange: PropTypes.func.isRequired,
  };

  return (
    <div className="applicationDetailCard">
      <button
        type="button"
        className="acceptButton"
        onClick={() => updateStatus(0)}
      >
        Accepter
      </button>
      <button
        type="button"
        className="attenteButton"
        onClick={() => updateStatus(1)}
      >
        En attente
      </button>
      <button
        type="button"
        className="refuserButton"
        onClick={() => updateStatus(2)}
      >
        Refuser
      </button>
    </div>
  );
}
