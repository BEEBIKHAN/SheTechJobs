/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
export default function ApplicationByCandidate({ applicationCard }) {
  return (
    applicationCard && (
      <div className="annonce_card">
        <div className="annonce_snippet">
          <div className="annonce_title">
            <h2>{applicationCard.title}</h2>
          </div>
          <div className="companyName">
            <h3>{applicationCard.company_name}</h3>
          </div>
          <div className="annonce_localisation">
            {applicationCard.localisation}
          </div>
          <div className="annonce_date">
            Candidaté le {applicationCard.application_date}
          </div>
          <div className="profil_required">
            {applicationCard.profile_required}
          </div>
          <div className="btnAnnonce">
            <div className="boutonApplication">
              <button type="button" className="btnMyApplications">
                En attente
              </button>
              <button type="button" className="btnMyApplications">
                Acceptée
              </button>
              <button type="button" className="btnMyApplications">
                Refusée
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
