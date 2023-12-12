import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

export default function SpaceCompany() {
  const { info } = useContext(ExportContext.Context);

  const [name, setName] = useState(info.companyName);
  const [siret, setSiret] = useState(info.siret);
  console.info("Etat de mon context", info);

  useEffect(() => {
    setName(localStorage.getItem("companyName"));
    setSiret(localStorage.getItem("Siret"));
  }, []);

  return (
    <div className="contentspacecompany">
      <form action="">
        <div className="publish_form_input">
          <div className="input_wrapper">
            <label htmlFor="name">Nom de l'entreprise*</label>
            <input type="text" value={name} />
          </div>
          <div className="input_wrapper">
            <label htmlFor="name">Numéro de Siret*</label>
            <input type="text" value={siret} />
          </div>
          <button type="submit" className="btnSpaceCompany">
            Enregister les modifications
          </button>
        </div>
      </form>
    </div>
  );
}
