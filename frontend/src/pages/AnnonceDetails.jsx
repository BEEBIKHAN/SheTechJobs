import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import trait from "../assets/images/trait-jaune.png";

export default function AnnonceDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.info("coucou", data);
  return (
    data && (
      <div className="annonce_details">
        coucou
        <div className="annonceDetailsTitle">
          <h2>{data.title}</h2>
          <p>{data.localisation}</p>
        </div>
        <div className="annonce_details_date">{data.date}</div>
        <div className="annonceDetailsBody">
          <div className="details">
            <h3>Qui sommes-nous?</h3>
            <img src={trait} alt="trait-jaune" />
            <p>{data.company_description}</p>
            <h3>Description du poste</h3>
            <img src={trait} alt="trait-jaune" />
            <p>{data.job_description}</p>
            <h3>Profil recherché</h3>
            <img src={trait} alt="trait-jaune" />
            <p>{data.profile_required}</p>
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
              <textarea
                name="motivations"
                id="motivations"
                cols="50"
                rows="22"
              />
              <br />
              <input type="submit" value="Postuler" />
            </form>
          </div>
        </div>
      </div>
    )
  );
}
