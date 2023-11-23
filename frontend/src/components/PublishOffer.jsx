import axios from "axios";
import { useState, useEffect } from "react";

export default function PublishOffer() {
  const [titlePoste, setTitlePoste] = useState("");
  const [selectedJob, setSelectedJob] = useState([]);
  const [typeDeContrat, setTypeDeContrat] = useState([]);
  const [departement, setDepartement] = useState([]);
  const [whoWeAre, setwhoWeAre] = useState("");
  const [descriptionPoste, setDescriptionPoste] = useState("");
  const [requiredProfil, setRequiredProfil] = useState("");

  const handleChangeTitlePoste = (event) => {
    setTitlePoste(event.target.value);
  };
  console.info("titlePoste:", titlePoste);

  const getSelectJob = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job`)
      .then((response) => {
        console.info(response.data);
        setSelectedJob(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setSelectedJob([]);
      });
  };

  const getTypeDeContrat = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/typeDeContrat`)
      .then((response) => {
        console.info(response.data);
        setTypeDeContrat(response.data || []);
      })
      .catch((error) => {
        console.error("Error type contract:", error);
        setTypeDeContrat([]);
      });
  };

  const getDepartement = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/departement`)
      .then((response) => {
        console.info(response.data);
        setDepartement(response.data || []);
      })
      .catch((error) => {
        console.error("Error type contract:", error);
        setDepartement([]);
      });
  };

  useEffect(() => {
    getSelectJob();
  }, []);
  console.info(Object.values(selectedJob)[1]);

  useEffect(() => {
    getTypeDeContrat();
  }, []);
  console.info(Object.values(typeDeContrat)[1]);

  useEffect(() => {
    getDepartement();
  }, []);
  console.info(Object.values(departement)[1]);

  useEffect(() => {
    console.info("Qui sommes nous ?", whoWeAre);
  }, [whoWeAre]);

  useEffect(() => {
    console.info("Description du poste", descriptionPoste);
  }, [descriptionPoste]);

  useEffect(() => {
    console.info("Profil recherché", requiredProfil);
  }, [requiredProfil]);

  return (
    <div className="content_publish_offer">
      <form action="">
        <div className="publish_form_input" action="">
          <div className="input_wrapper">
            <label htmlFor="name">Titre du poste *</label>
            <input type="text" onChange={handleChangeTitlePoste} />
          </div>

          <div className="input_wrapper">
            <label htmlFor="name"> Sélection Métier *</label>
            <select>
              <option value="">.</option>
              {Object.values(selectedJob).map((value) => (
                <option key={0} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="input_wrapper">
            <label htmlFor="name">Type de contrat *</label>
            <select>
              <option value="">.</option>
              {Object.values(typeDeContrat).map((value) => (
                <option key={0} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="input_wrapper">
            <label htmlFor="name">Localisation du poste *</label>
            <select>
              <option value="">.</option>
              {Object.values(departement).map((value) => (
                <option key={0} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="publish_form_label" action="">
          <label htmlFor="name">Qui sommes nous ? *</label>
          <textarea
            className="big_label"
            type="text"
            value={whoWeAre}
            onChange={(event) => setwhoWeAre(event.target.value)}
          />
          <label htmlFor="name">Description du poste *</label>
          <textarea
            className="big_label"
            type="text"
            value={descriptionPoste}
            onChange={(event) => setDescriptionPoste(event.target.value)}
          />

          <label htmlFor="name">Profil recherché *</label>
          <textarea
            className="big_label"
            type="text"
            value={requiredProfil}
            onChange={(event) => setRequiredProfil(event.target.value)}
          />

          <button type="submit">Publier l'annonce</button>
        </div>
      </form>
    </div>
  );
}
