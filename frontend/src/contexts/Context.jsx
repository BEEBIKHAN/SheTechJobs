/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from "react";

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

  const resetInfo = () => {
    setInfo({
      id: null,
      Role: null,
      companyName: null,
      Email: null,
      siret: null,
      firstname: null,
      lastname: null,
    });
    localStorage.setItem("id", null);
    localStorage.setItem("Role", null);
    localStorage.setItem("companyName");
    localStorage.setItem("Email", null);
    localStorage.setItem("Siret");
    localStorage.setItem("firstname");
    localStorage.setItem("lastname", null);
  };

  useEffect(() => {
    localStorage.setItem("id", info.id);
    localStorage.setItem("Role", info.Role);
    localStorage.setItem("companyName", info.companyName);
    localStorage.setItem("Email", info.Email);
    localStorage.setItem("Siret", info.siret);
    localStorage.setItem("firstname", info.firstname);
    localStorage.setItem("lastname", info.lastname);
  }, [info]);

  return (
    <Context.Provider value={{ info, setInfo, resetInfo }}>
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
