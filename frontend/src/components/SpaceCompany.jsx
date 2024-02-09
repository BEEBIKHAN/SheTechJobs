import { useContext } from "react"; // import du hook
import ExportContext from "../contexts/Context"; // import du contexte

export default function SpaceCompany() {
  const { info } = useContext(ExportContext.Context);
  // insertion du contexte dans une variable constante

  return (
    // Création du formulaire espace entreprise avec informations issue du contexte
    <div className="contentspacecompany">
      <span> Hello👋 {info.companyName}</span>
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
