import { useContext } from "react";
import ExportContext from "../contexts/Context";

export default function SpaceCompany() {
  const { info } = useContext(ExportContext.Context);

  return (
    <div className="contentspacecompany">
      <span> Bienvenue 👋 {info.companyName}</span>
      <form action="">
        <div className="publish_form_input">
          <div className="input_wrapper">
            <label htmlFor="name">Nom de l'entreprise*</label>
            <input type="text" value={info.companyName} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="name">Numéro de Siret*</label>
            <input type="text" value={info.siret} />
          </div>
          <button type="submit" className="btnSpaceCompany">
            Enregister les modifications
          </button>
        </div>
      </form>
    </div>
  );
}
