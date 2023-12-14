import React, { useContext } from "react";
import ExportContext from "../contexts/Context";

export default function MonEspace() {
  const { info } = useContext(ExportContext.Context);

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
                  value={info.lastName}
                />
              </div>
              <div className="Prenom">
                <input
                  type="text"
                  placeholder="Prenom*"
                  name="Prenom"
                  value={info.firstName}
                />
              </div>
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="E-mail*"
                name="email"
                value={info.email}
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
