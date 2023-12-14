import React, { useState, useEffect, useContext } from "react";
import ExportContext from "../contexts/Context";

export default function MonEspace() {
  const { info } = useContext(ExportContext.Context);

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

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!inputData.Nom || !inputData.Prenom || !inputData.email) {
  //     // eslint-disable-next-line no-alert
  //     alert("Tous les champs sont obligatoires");
  //   } else {
  //     console.info("Enregistrer les modifications");
  //     setInputData(data);
  //   }
  // }

  return (
    <div className="principal_monespace">
      <span> Hello👋 {info.firstName}</span>
      <div className="fcontainer">
        <form className="container">
          <div className="fmonespace">
            <div className="comb_nom">
              <div className="Nom">
                <input
                  type="text"
                  placeholder="Nom*"
                  name="Nom"
                  value={info.lastname}
                  onChange={handleData}
                />
              </div>
              <div className="Prenom">
                <input
                  type="text"
                  placeholder="Prenom*"
                  name="Prenom"
                  value={info.firstname}
                  onChange={handleData}
                />
              </div>
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="E-mail*"
                name="email"
                value={info.Email}
                onChange={handleData}
              />
            </div>
            <div className="button_monespace" />
          </div>
        </form>
      </div>
    </div>
  );
}
