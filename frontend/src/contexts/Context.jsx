/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from "react";

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

  const resetInfo = () => {
    setInfo({});
    localStorage.setItem("id", null);
    localStorage.setItem("Role", null);
    localStorage.setItem("companyName");
    localStorage.setItem("Email", null);
    localStorage.setItem("Siret");
    localStorage.setItem("firstname", null);
    localStorage.setItem("lastname", null);
  };

  useEffect(() => {
    localStorage.setItem("id", info.id);
    localStorage.setItem("Role", info.Role);
    localStorage.setItem("companyName", info.companyName);
    localStorage.setItem("Email", info.email);
    localStorage.setItem("Siret", info.siret);
    localStorage.setItem("firstname", info.firstName);
    localStorage.setItem("lastname", info.lastName);
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
