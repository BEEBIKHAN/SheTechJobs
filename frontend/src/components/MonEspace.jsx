import React, { useState, useEffect } from "react";
import "../styles/monespace.css";
import "../styles/app.css";

export default function MonEspace() {
  const data = {
    Nom: "",
    Prenom: "",
    email: "",
    telephone: "",
    cvlink: "",
  };
  const [inputData, setInputData] = useState(data);
  const [imageFile, setImageFile] = useState(null);
  useEffect(() => {
    console.info("Enregistrer");
  }, []);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.info(inputData);
  }
  function handlePhoto(e) {
    const file = e.target.files[0];
    setImageFile(file);
  }
  function handleTelephone(e) {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/, "");
    setInputData({ ...inputData, telephone: numericValue });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.Nom ||
      !inputData.Prenom ||
      !inputData.email ||
      !inputData.telephone
    ) {
      console.error("Tous les champs sont obligatoires");
    } else {
      console.info("Image File:", imageFile);
      setInputData(data);
    }
  }
  console.info(inputData);
  return (
    <div className="principal_monespace">
      <form className="container" onSubmit={handleSubmit}>
        <div className="fmonespace">
          <div className="header">
            <h2>Mon Espace</h2>
          </div>
          <div className="photo">
            <input
              type="file"
              id="photoInput"
              name="Photo"
              accept="image/*"
              onChange={handlePhoto}
            />
            <label htmlFor="photoInput">
              {imageFile ? (
                <img src={URL.createObjectURL(imageFile)} alt="Selected" />
              ) : (
                "Portrait"
              )}
            </label>
          </div>
          <div className="Nom">
            <input
              type="text"
              placeholder="Nom*"
              name="Nom"
              value={inputData.Nom}
              onChange={handleData}
            />
          </div>
          <div className="form-row">
            <div className="Prenom">
              <input
                type="text"
                placeholder="Prenom*"
                name="Prenom"
                value={inputData.Prenom}
                onChange={handleData}
              />
            </div>
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="E-mail*"
              name="email"
              value={inputData.email}
              onChange={handleData}
            />
          </div>
          <div className="telephone">
            <input
              type="tel"
              placeholder="Telephone*"
              name="telephone"
              value={inputData.telephone}
              onChange={handleTelephone}
            />
          </div>
          <div className="localisation">
            <input
              type="text"
              placeholder="Localisation"
              name="localisation"
              value={inputData.localisation}
              onChange={handleData}
            />
          </div>
          <div className="cv-link">
            <input
              type="file"
              placeholder="Telecharger mon cv"
              name="cv"
              value={inputData.cvlink}
              onChange={handleData}
            />
          </div>
          <div className="button_monespace">
            <button className="btn_monespace" type="submit">
              Enregistrer les modifications
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
