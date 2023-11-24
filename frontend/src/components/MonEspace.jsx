import React, { useState, useEffect } from "react";

export default function MonEspace() {
  const data = {
    Nom: "",
    Prenom: "",
    email: "",
    telephone: "",
    location: "",
  };
  const [inputData, setInputData] = useState(data);

  useEffect(() => {
    console.info("Enregistrer");
  }, []);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.info(inputData);
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
      // eslint-disable-next-line no-alert
      alert("Tous les champs sont obligatoires");
    } else {
      console.info("Enregistrer les modifications");
      setInputData(data);
    }
  }

  return (
    <div className="principal_monespace">
      <div className="fcontainer">
        <form className="container" onSubmit={handleSubmit}>
          <div className="fmonespace">
            <div className="comb_nom">
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
            <div className="button_monespace">
              <button className="btn_monespace" type="submit">
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
