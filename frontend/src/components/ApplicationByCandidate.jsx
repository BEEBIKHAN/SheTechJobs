/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
export default function ApplicationByCandidate({ applicationCard }) {
  return (
    applicationCard && (
      <div className="applicationByCandidate_card">
        <div className="application_snippet">
          <div className="annonce_title">
            <h2>{applicationCard.title}</h2>
          </div>
          <div className="companyName">
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
