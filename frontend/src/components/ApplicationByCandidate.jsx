/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
export default function ApplicationByCandidate({ applicationCard }) {
  // eslint-disable-next-line consistent-return
  const displayStatus = () => {
    if (applicationCard.application_status === 2) {
      return "Refusé";
    }
    if (applicationCard.application_status === 1) {
      return "Accepté";
    }
    if (applicationCard.application_status === 0) {
      return "Attente";
    }
  };
  const status = displayStatus();
  return (
    applicationCard && (
      <div className="applicationByCandidate_card">
        <div className="application_snippet">
          <div className="annonce_title">
            <h2>{applicationCard.title}</h2>
          </div>
          <div className="companyName">
            <h2>{status}</h2>
            <h3>{applicationCard.company_name}</h3>
          </div>
          <div className="annonce_localisation">
            {applicationCard.localisation}
          </div>
          <div className="application_date">
            Candidaté le {applicationCard.application_date}
          </div>
          <div className="profil_required">
            {applicationCard.profile_required}
          </div>
        </div>
        <div className="btnsApplication">
          <button
            type="button"
            className="btnMyApplications btnEnAttente active"
          >
            En attente
          </button>
          <button type="button" className="btnMyApplications btnAcceptee">
            Acceptée
          </button>
          <button type="button" className="btnMyApplications btnRefusee">
            Refusée
          </button>
        </div>
      </div>
    )
  );
}
