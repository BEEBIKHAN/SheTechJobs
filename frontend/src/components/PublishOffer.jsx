import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function PublishOffer() {
  const [titlePoste, setTitlePoste] = useState("");
  const [allJob, setAllJob] = useState([]);
  const [jobSelect, setJobSelect] = useState("");
  const [allContract, setAllContract] = useState([]);
  const [typeDeContrat, setTypeDeContrat] = useState("");
  const [allDepartement, setAllDepartement] = useState([]);
  const [oneDepartement, setOneDepartement] = useState("");
  const [whoWeAre, setwhoWeAre] = useState("");
  const [descriptionPoste, setDescriptionPoste] = useState("");
  const [requiredProfil, setRequiredProfil] = useState("");
  const [success, setSuccess] = useState(false);
  const companyId = localStorage.getItem("id");

  const handleChangeTitlePoste = (event) => {
    setTitlePoste(event.target.value);
  };

  const getSelectJob = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job`)
      .then((response) => {
        console.info(response.data);
        setAllJob(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setAllJob([]);
      });
  };

  /*   addOfer  */

  const addOffer = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/offers`, {
        title: titlePoste,
        company_description: whoWeAre,
        job_description: descriptionPoste,
        profile_required: requiredProfil,
        status: 1,
        contract_id: typeDeContrat,
        departement_id: oneDepartement,
        job_id: jobSelect,
        company_id: companyId,
      })
      .then((response) => {
        setSuccess(console.info(response.data));
        toast.success("L'annonce a bien été publiée !");
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /*    addOffer    */

  const getTypeDeContrat = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contract`)
      .then((response) => {
        console.info(response.data);
        setAllContract(response.data || []);
      })
      .catch((error) => {
        console.error("Error type contract:", error);
        setAllContract([]);
      });
  };

  const getDepartement = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/departement`)
      .then((response) => {
        console.info(response.data);
        setAllDepartement(response.data || []);
      })
      .catch((error) => {
        console.error("Error de département:", error);
        setAllDepartement([]);
      });
  };

  useEffect(() => {
    getSelectJob();
  }, []);

  useEffect(() => {
    getTypeDeContrat();
  }, []);

  useEffect(() => {
    getDepartement();
  }, []);

  useEffect(() => {
    console.info("Qui sommes nous ?", whoWeAre);
  }, [whoWeAre]);

  useEffect(() => {
    console.info("Description du poste", descriptionPoste);
  }, [descriptionPoste]);

  useEffect(() => {
    console.info("Profil recherché", requiredProfil);
  }, [requiredProfil]);

  console.info("titre du poste:", titlePoste);
  console.info("métier selectionné:", jobSelect);
  console.info("Type de contract:", typeDeContrat);

  return (
    <div className="content_publish_offer">
      <form onSubmit={addOffer}>
        <div className="publish_form_input" action="">
          <div className="input_wrapper">
            <label htmlFor="name">Titre du poste *</label>
            <input
              type="text"
              value={titlePoste}
              onChange={handleChangeTitlePoste}
            />
          </div>

          <div className="input_wrapper">
            <label htmlFor="name"> Sélection Métier *</label>
            <select
              onChange={(event) => setJobSelect(event.target.value)}
              value={jobSelect}
            >
              <option value="">.</option>
              {allJob.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input_wrapper">
            <label htmlFor="name">Type de contrat *</label>
            <select
              onChange={(event) => setTypeDeContrat(event.target.value)}
              value={typeDeContrat}
            >
              <option value="">.</option>
              {allContract.map((contract) => (
                <option key={contract.id} value={contract.id}>
                  {contract.type}
                </option>
              ))}
            </select>
          </div>

          <div className="input_wrapper">
            <label htmlFor="name">Localisation du poste *</label>
            <select
              onChange={(event) => setOneDepartement(event.target.value)}
              value={oneDepartement}
            >
              <option value="">.</option>
              {allDepartement.map((lieu) => (
                <option key={lieu.id} value={lieu.id}>
                  {lieu.name}
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
      {success ? <p>{success}</p> : ""}
    </div>
  );
}
