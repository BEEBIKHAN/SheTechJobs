import { useContext } from "react";
import ExportContext from "../contexts/Context";

export default function SpaceCompany() {
  const { info } = useContext(ExportContext.Context);
  console.info("Etat de mon context", info.companyName);
  return (
    <div className="contentspacecompany">
      <form action="">
        <div className="publish_form_input">
          <div className="input_wrapper">
            <label htmlFor="name">Nom de l'entreprise *</label>
            <input type="text" />
          </div>
          <div className="input_wrapper">
            <label htmlFor="name">Numéro de Siret*</label>
            <input type="text" />
          </div>
          <button type="submit" className="btnSpaceCompany">
            Enregister les modifications
          </button>
        </div>
      </form>
    </div>
  );
}
