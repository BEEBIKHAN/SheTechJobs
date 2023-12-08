/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import trait from "../assets/images/trait-jaune.png";

export default function UpdateContentOffer({ annonce }) {
  const { id } = useParams();

  const data = {
    titleDescription: "",
    companyDescription: "",
    jobDescription: "",
    profileRequired: "",
    status: "",
    type: "",
    localisation: "",
    métier: "",
  };
  const [inputData, setInputData] = useState(data);

  const updateOffer = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/offer/${id}`, {
        titleDescription: inputData.titleDescription,
        companyDescription: inputData.companyDescription,
        jobDescription: inputData.jobDescription,
        profileRequired: inputData.profileRequired,
        status: inputData.status,
        type: inputData.type,
        localisation: inputData.localisation,
        métier: inputData.métier,
      })
      .then((response) => {
        console.info(response);
      });
  };

  useEffect(() => {
    updateOffer();
  }, []);
  console.info("Enregistrer:", inputData);

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
          {inputData && (
            <form onSubmit={() => updateOffer(inputData.id)}>
              <textarea
                type="text"
                name="companyDescription"
                placeholder={annonce.company_description}
                //   value={annonce.company_description}
                onChange={(event) =>
                  setInputData({
                    ...inputData,
                    companyDescription: event.target.value,
                  })
                }
              />
              <h3>Description du poste</h3>
              <img src={trait} alt="trait-jaune" />
              <textarea
                type="text"
                name="jobDescription"
                placeholder={annonce.job_description}
                //   value={annonce.job_description}
                onChange={(event) =>
                  setInputData({
                    ...inputData,
                    jobDescription: event.target.value,
                  })
                }
              />

              <h3>Profil recherché</h3>
              <img src={trait} alt="trait-jaune" />
              <textarea
                type="text"
                name="profileRequired"
                placeholder={annonce.profile_required}
                // value={annonce.profile_required}
                onChange={(event) =>
                  setInputData({
                    ...inputData,
                    profileRequired: event.target.value,
                  })
                }
              />
              <input
                type="submit"
                // onClick={() => updateOffer(annonce.id)}
                className="btnUpdateOffer"
                value="Enregistrer"
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
}
