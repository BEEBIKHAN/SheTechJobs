import axios from "axios";
import { useState } from "react";
import entrepreneurs from "../assets/images/inscription_entreprise.png";
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
      <div className="espace_connexion">
        <img
          src={entrepreneurs}
          alt="Beautiful entrepreuneurs chatting and walking down the street while smiling"
        />
        <form className="register_form" onSubmit={sendRegisterData}>
          <h2>Créer un compte</h2>
          <input
            type="text"
            placeholder="Nom de l'entreprise"
            onChange={handleChangeCompanyName}
          />
          <input
            type="text"
            placeholder="Addresse mail"
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
          />
          <input
            type="password"
            placeholder="Confirmation du mot de passe"
            onChange={handleChangePassword}
          />
          <input
            type="text"
            placeholder="Numéro de Siret"
            onChange={handleChangesiret}
          />
          <input
            style={{
              backgroundColor: "#EBAF00",
              color: "#112F47",
              borderRadius: "24px",
              padding: "1rem 0",
              fontWeight: "bolder",
              fontSize: "16px",
              margin: "16px 0px",
            }}
            className="btn"
            type="submit"
            value="Créer un compte"
          />
          <p>
            Déjà membre ?{" "}
            <a href="#Se connecter" id="seConnecter">
              Se connecter
            </a>
          </p>
          <p>
            En cliquant sur "Créer un compte", vous acceptez les
            <span className="CGU"> CGU</span> ainsi que notre notre
            <span className="CGU"> politique de confidentialité</span> décrivant
            la finalité des traitements de vos données personnelles.
          </p>
        </form>
      </div>
      {success ? <p>{success}</p> : ""}
      {error ? <p>{error}</p> : ""}
    </>
  );
}
