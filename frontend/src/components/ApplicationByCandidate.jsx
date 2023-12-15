/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
export default function ApplicationByCandidate({ applicationCard }) {
  // eslint-disable-next-line consistent-return
  const displayStatus = () => {
    if (applicationCard.application_status === 2) {
      return (
        <div className="refuse_application">
          <h2>Refusé</h2>
        </div>
      );
    }
    if (applicationCard.application_status === 0) {
      return (
        <div className="accept_application">
          <h2>Accepté</h2>
        </div>
      );
    }
    if (applicationCard.application_status === 1) {
      return (
        <div className="wait_application">
          <h2>En attente</h2>
        </div>
      );
    }
  };

  return (
    applicationCard && (
      <div className="applicationByCandidate_card">
        <div className="application_snippet">
          <div className="annonce_title">
            <h2>{applicationCard.title}</h2>
          </div>
          <div className="companyName">
            {displayStatus()}
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
      </div>
    )
  );
}
