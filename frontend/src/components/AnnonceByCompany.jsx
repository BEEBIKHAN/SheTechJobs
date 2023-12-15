/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
export default function AnnonceByCompany({ card }) {
  return (
    card && (
      <div className="annonce_card">
        <div className="annonce_snippet">
          <div className="boxannonce">
            <div className="annonce_title">
              <h2>{card.title}</h2>
            </div>
            <div className="annonce_localisation">{card.localisation}</div>
            <div className="annonce_date">Publiée le {card.date}</div>
            <div className="profil_required">{card.profile_required}</div>
          </div>

          <div className="btnAnnonce">
            <button>VOIR L'ANNONCE</button>
          </div>
        </div>
      </div>
    )
  );
}
