import PropTypes from "prop-types";

export default function AnnonceCard({ details }) {
  return (
    details && (
      <div className="annonce_card">
        <div className="annonce_title">
          <h2>{details.title}</h2>
        </div>
        <div className="annonce_details">
          <div className="company_description">
            {details.company_description}
          </div>
          <div className="job_description">{details.job_description}</div>
          <div className="profil_required">{details.profile_required}</div>
          {/* <div className="candidate_motivations"></div> */}
        </div>
      </div>
    )
  );
}

AnnonceCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    company_description: PropTypes.string,
    job_description: PropTypes.string,
    profile_required: PropTypes.string,
  }).isRequired,
};
