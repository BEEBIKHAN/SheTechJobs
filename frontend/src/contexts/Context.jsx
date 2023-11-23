/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [info, setInfo] = useState({
    id: localStorage.getItem("id"),
    role: localStorage.getItem("role"),
    companyName: localStorage.getItem("nom de l'entreprise"),
    email: localStorage.getItem("email de company"),
    siret: localStorage.getItem("siret"),
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
  });

  return (
    <Context.Provider value={{ info, setInfo }}>{children}</Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
