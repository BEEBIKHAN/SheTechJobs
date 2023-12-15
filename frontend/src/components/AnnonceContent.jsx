/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ExportContext from "../contexts/Context";
import trait from "../assets/images/trait-jaune.png";

export default function AnnonceContent({ annonce }) {
  const [motivations, setMotivations] = useState("");
  const { info } = useContext(ExportContext.Context);
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  console.info("Ceci est l'id de la candidate", info.id);
  console.info("ceci est l'id de l'annonce", id);

  const sendApplicationWithMotivations = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/application-motivations`, {
        application_status: 1,
        motivations,
        candidate_id: info.id,
        offer_id: id,
      })
      .then((response) => {
        setSuccess(console.info(response.data));
        toast.success("Candidature envoyée avec succès !");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangeMotivations = (event) => {
    setMotivations(event.target.value);
  };

  console.info("Les motivations:", motivations);

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
          <form onSubmit={sendApplicationWithMotivations}>
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
              onChange={handleChangeMotivations}
            />
            <br />
            <input type="submit" value="Postuler" />
          </form>
        </div>
      </div>
      {success ? <p>{success}</p> : ""}
    </>
  );
}
