/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [infoCandidate, setInfoCandidate] = useState({
    id: localStorage.getItem("id"),
    role: localStorage.getItem("role"),
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
  });
  return (
    <Context.Provider value={{ infoCandidate, setInfoCandidate }}>
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
