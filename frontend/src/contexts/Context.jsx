/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [info, setInfo] = useState({
    id: localStorage.getItem("id"),
    Role: localStorage.getItem("Role"),
    companyName: localStorage.getItem("companyName"),
    Email: localStorage.getItem("Email"),
    siret: localStorage.getItem("Siret"),
    firstname: localStorage.getItem("firstname"),
    lastname: localStorage.getItem("lastname"),
    offertitle: localStorage.getItem("title"),
    company_description: localStorage.getItem("company_description"),
    job_description: localStorage.getItem("job_description"),
    profile_required: localStorage.getItem("profile_required"),
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
