/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [infoCompany, setInfoCompany] = useState({
    id: localStorage.getItem("id"),
    role: localStorage.getItem("role"),
    companyName: localStorage.getItem("nom de l'entreprise"),
    email: localStorage.getItem("email"),
    siret: localStorage.getItem("siret"),
  });

  return (
    <Context.Provider value={{ infoCompany, setInfoCompany }}>
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
