/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
export default function ApplicationByCandidate({ applicationCard }) {
  console.info("aplication card :", applicationCard);

  // eslint-disable-next-line consistent-return
  const displayApplicationStatut = () => {
    if (applicationCard.application_status === 2) {
      return <h1>Refusé</h1>;
    }
    if (applicationCard.application_status === 1) {
      return <h1>En attente</h1>;
    }
    if (applicationCard.application_status === 0) {
      return <h1>Accepté</h1>;
    }
  };

  return (
    applicationCard && (
      <div className="applicationByCandidate_card">
        <div className="application_snippet">
          <div className="annonce_title">
            <h2>{applicationCard.title}</h2>
            {displayApplicationStatut()}
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
