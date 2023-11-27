/* eslint-disable react/prop-types */
import trait from "../assets/images/trait-jaune.png";

export default function AnnonceContent({ annonce }) {
  return (
    <>
      <div className="annonce_details">
        <div className="annonceDetailsTitle">
          <h2>
            {annonce.title}({annonce.type})
          </h2>
          <p>{annonce.localisation}</p>
        </div>
        <div className="annonce_details_date">{annonce.date}</div>
      </div>
      <div className="annonceDetailsBody">
        <div className="details">
          <h3>Qui sommes-nous?</h3>
          <img src={trait} alt="trait-jaune" />
          <p>{annonce.company_description}</p>
          <h3>Description du poste</h3>
          <img src={trait} alt="trait-jaune" />
          <p>{annonce.job_description}</p>
          <h3>Profil recherché</h3>
          <img src={trait} alt="trait-jaune" />
          <p>{annonce.profile_required}</p>
        </div>
        <div className="motivationText">
          <h3>TechNova Solutions</h3>
          <form action="/mycv">
            <p id="offre">
              Si cette offre vous intéresse, veuillez cliquer sur le bouton
              ci-dessus. Vous augmenterez vos chances si vous écrivez ce qui
              vous motive dans l’offre.
            </p>
            <p id="optionnel">Vos motivations (optionnel) :</p>
            <textarea name="motivations" id="motivations" cols="50" rows="22" />
            <br />
            <input type="submit" value="Postuler" />
          </form>
        </div>
      </div>
    </>
  );
}
