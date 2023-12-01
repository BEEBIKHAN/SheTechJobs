/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [info, setInfo] = useState({
    id: localStorage.getItem("id"),
    Role: localStorage.getItem("Role"),
    companyName: localStorage.getItem("companyName"),
    email: localStorage.getItem("Email"),
    siret: localStorage.getItem("Siret"),
    firstName: localStorage.getItem("firstname"),
    lastName: localStorage.getItem("lastname"),
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
