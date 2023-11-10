import axios from "axios";
import { useState } from "react";
import "../styles/register.css";

export default function Register() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [siret, setSiret] = useState("");
  const [error, setError] = useState(false);
  const [success, setSucces] = useState(false);

  const handleChangeCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangesiret = (event) => {
    setSiret(event.target.value);
  };

  const sendRegisterData = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/company`, {
        companyName,
        email,
        password,
        siret,
      })
      .then((response) => {
        setSucces(response.data.message);
        setError(false);
        console.info(response);
      })
      .catch((err) => {
        if (
          err.response.data.error === `"companyName" is not allowed to be empty`
        ) {
          setError("Le nom de l'entreprise ne peut pas être vide");
        } else if (
          err.response.data.error ===
          `"companyName" must be a valid companyName`
        ) {
          setError("Mettre un nom d'entreprise valide");
        } else if (
          err.response.data.error === `"email" is not allowed to be empty`
        ) {
          setError("Merci de donner un email");
        } else if (
          err.response.data.error === `"email" must be a valid email`
        ) {
          setError("Merci de donner un email valide");
        } else if (
          err.response.data.error === `"password" is not allowed to be empty`
        ) {
          setError("Merci de donner un password");
        } else if (
          err.response.data.error ===
          `"password" length must be at least 8 characters long`
        ) {
          setError("Le mot de passe doit faire au moins 8 caractères");
        } else if (
          err.response.data.error === `"siret" is not allowed to be empty`
        ) {
          setError("Merci de donner un siret");
        } else if (
          err.response.data.error ===
          `"siret" length must be at least 14 characters long`
        ) {
          setError("Le mot de passe doit faire au moins 14 caractères");
        } else if (err.response.data.error === 1062) {
          setError("L'email est déjà enregistré");
        } else {
          console.error(err.response.data.error);
        }
        setSucces(false);
      });
  };

  console.info(
    "Nom de l'entreprise: ",
    companyName,
    "Email de l'entreprise:",
    email,
    "Mot de passe:",
    password,
    "Numéro siret:",
    siret
  );

  return (
    <>
      <h1>Page d'enregistrement</h1>
      <form className="register_form" onSubmit={sendRegisterData}>
        <p>Nom de l'entreprise</p>
        <input type="text" onChange={handleChangeCompanyName} />
        <p>Addresse mail</p>
        <input type="text" onChange={handleChangeEmail} />
        <p>Mot de passe</p>
        <input type="text" onChange={handleChangePassword} />
        <p>Numéro Siret</p>
        <input type="text" onChange={handleChangesiret} />
        <input
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem 0",
          }}
          type="submit"
          value="S'enregistrer"
        />
      </form>
      {success ? <p>{success}</p> : ""}
      {error ? <p>{error}</p> : ""}
    </>
  );
}
