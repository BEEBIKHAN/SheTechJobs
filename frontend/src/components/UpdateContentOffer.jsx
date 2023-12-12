/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import trait from "../assets/images/trait-jaune.png";

export default function UpdateContentOffer({ annonce }) {
  const { id } = useParams();
  const [updateTitleDescription, setUpdateTitleDescription] = useState(
    annonce.title
  );
  const [updateCompanyDescription, setUpdateCompanyDescription] = useState(
    annonce.company_description
  );
  const [updateJobDescription, setUpdateJobDescription] = useState(
    annonce.job_description
  );
  const [updateProfileDescription, setUpdateProfileDescription] = useState(
    annonce.profile_required
  );

  const updateOffer = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/offers/${id}`, {
        title: updateTitleDescription,
        company_description: updateCompanyDescription,
        job_description: updateJobDescription,
        profile_required: updateProfileDescription,
      })
      .then((response) => {
        console.info(
          "Description de l'entreprise modifié avec succès:",
          response.data,
          updateTitleDescription
        );
      })
      .catch((err) => {
        console.error(
          "Erreur lors de la modification de la description d'entreprise:",
          err
        );
      });
  };

  const handleChangeTitleDescription = (e) => {
    setUpdateTitleDescription(e.target.value);
  };

  const handleChangeCompanyDescription = (e) => {
    setUpdateCompanyDescription(e.target.value);
  };

  const handleChangeJobDescription = (e) => {
    setUpdateJobDescription(e.target.value);
  };

  const handleChangeProfileDescription = (e) => {
    setUpdateProfileDescription(e.target.value);
  };

  useEffect(() => {
    console.info(
      "Voici la description de l'entreprise modifiée:",
      updateTitleDescription
    );
  }, []);

  useEffect(() => {
    console.info(
      "Voici la description de l'entreprise modifiée:",
      updateCompanyDescription
    );
  }, []);

  useEffect(() => {
    console.info(
      "Voici la description de l'entreprise modifiée:",
      updateJobDescription
    );
  }, []);

  useEffect(() => {
    console.info(
      "Voici la description de l'entreprise modifiée:",
      updateProfileDescription
    );
  }, []);

  return (
    <>
      <div className="annonce_details">
        <div className="annonceDetailsTitle">
          <h2>
            <input
              type="text"
              placeholder={annonce.title}
              value={updateTitleDescription}
              onChange={handleChangeTitleDescription}
            />
            <br />({annonce.type})
          </h2>
          <p>{annonce.localisation}</p>
        </div>
        <div className="annonce_details_date">{annonce.date}</div>
      </div>
      <div className="annonceDetailsBody">
        <div className="details">
          <h3>Qui sommes-nous?</h3>
          <img src={trait} alt="trait-jaune" />
          <form onSubmit={(e) => e.preventDefault()}>
            <textarea
              type="text"
              name="companyDescription"
              placeholder={annonce.company_description}
              value={updateCompanyDescription}
              onChange={handleChangeCompanyDescription}
            />
            <h3>Description du poste</h3>
            <img src={trait} alt="trait-jaune" />
            <textarea
              type="text"
              name="jobDescription"
              placeholder={annonce.job_description}
              value={updateJobDescription}
              onChange={handleChangeJobDescription}
            />

            <h3>Profil recherché</h3>
            <img src={trait} alt="trait-jaune" />
            <textarea
              type="text"
              name="profileRequired"
              placeholder={annonce.profile_required}
              value={updateProfileDescription}
              onChange={handleChangeProfileDescription}
            />
            <input
              type="submit"
              onClick={updateOffer}
              className="btnUpdateOffer"
              value="Enregistrer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
