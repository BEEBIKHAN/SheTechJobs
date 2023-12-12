import React, { useState, useEffect, useContext } from "react";
import ExportContext from "../contexts/Context";

export default function MonEspace() {
  const { info } = useContext(ExportContext.Context);
  const data = {
    Nom: "",
    Prenom: "",
    email: "",
  };
  const [inputData, setInputData] = useState(data);

  useEffect(() => {
    console.info("", inputData);
  }, []);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.info(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.Nom || !inputData.Prenom || !inputData.email) {
      // eslint-disable-next-line no-alert
      alert("Tous les champs sont obligatoires");
    } else {
      console.info("Enregistrer les modifications");
      setInputData(data);
    }
  }

  return (
    <div className="principal_monespace">
      <span> Hello👋 {info.firstname}</span>
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
