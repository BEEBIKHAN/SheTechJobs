import React, { useState, useEffect } from "react";
import "../styles/monespace.css";
import "../styles/app.css";
import bag from "../assets/images/bag.png";
import bell from "../assets/images/bell-icon.png";
import cv from "../assets/images/cv-icon.png";
import moncompte from "../assets/images/mon-compte.png";

export default function MonEspace() {
  const data = {
    Nom: "",
    Prenom: "",
    email: "",
    telephone: "",
    location: "",
    sportfolio: "",
    linkedin: "",
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
      <div className="deux_form">
        <div className="dash_icons">
          <img src={cv} alt="cv" />
          <img src={bell} alt="bell" />
          <img src={bag} alt="bag" />
          <img src={moncompte} alt="moncompte" />
        </div>
        <div className="fcontainer">
          <div className="fboutons">
            <button type="submit">Mon Espace</button>
            <button type="submit">Mon CV</button>
            <button type="submit">Mes Annonces</button>
            <button className="btn_Gmoncompte" type="submit">
              Gérer mon compte
            </button>
          </div>

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
              <div className="Prenom">
                <input
                  type="text"
                  placeholder="Prenom*"
                  name="Prenom"
                  value={inputData.Prenom}
                  onChange={handleData}
                />
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
              <div className="location">
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={inputData.location}
                  onChange={handleData}
                />
              </div>
              <div className="site">
                <input
                  type="url"
                  placeholder="Site/Portfolio"
                  name="sportfolio"
                  value={inputData.sportfolio}
                  onChange={handleData}
                />
              </div>
              <div className="linkedin">
                <input
                  type="url"
                  placeholder="LinkedIn"
                  name="linkedin"
                  value={inputData.linkedin}
                  onChange={handleData}
                />
              </div>
              <div className="button_monespace">
                <button className="btn_monespace" type="submit">
                  Enregistrer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
