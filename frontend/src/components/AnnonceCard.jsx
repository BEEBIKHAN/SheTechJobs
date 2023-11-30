/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

export default function AnnonceCard({ snippet }) {
  return (
    snippet && (
      <div className="annonce_card">
        <div className="annonce_snippet">
          <div className="annonce_title">
            <h2>{snippet.title}</h2>
          </div>
          <div className="annonce_localisation">{snippet.localisation}</div>
          <div className="annonce_date">Publiée le {snippet.date}</div>
          <div className="profil_required">{snippet.profile_required}</div>
        </div>
        <button>VOIR L'ANNONCE</button>
      </div>
    )
  );
}
