import axios from "axios";
import { useState } from "react";

export default function RegisterCandidate() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangeFirstname = (event) => {
    setFirstname(event.target.value);
  };

  const handleChangeLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeCheckedPassword = (event) => {
    setCheckedPassword(event.target.value);
  };

  const sendCandidateData = (event) => {
    event.preventDefault();

    if (password === checkedPassword) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/candidate`, {
          firstname,
          lastname,
          email,
          password,
        })
        .then((response) => {
          setSuccess("Vous êtes enregistrée !!!");
          setError(false);
          console.info(response);
        })
        .catch((err) => {
          if (
            err.response.data.error === `"email" is not allowed to be empty`
          ) {
            setError("Merci de mettre votre email");
          } else if (
            err.response.data.error === `"email" must be a valid email`
          ) {
            setError("Mettre un Email valide");
          } else if (
            err.response.data.error === `"password" is not allowed to be empty`
          ) {
            setError("Merci de donner un mot de passe");
          } else if (
            err.response.data.error ===
            `"password" length must be at least 8 characters long`
          ) {
            setError("Le mot de passe doit faire minimum 8 caractères");
          } else if (err.response.data.error === 1062) {
            setError("Votre email est déjà enregistré");
          } else {
            console.error(err.response.data.error);
          }
          setSuccess(false);
        });
    } else {
      setError("Les mots de passe ne correspondent pas");
      console.error("Les mots de passe ne correspondent pas ;(");
    }
  };

  console.info(
    "firstname :",
    firstname,
    "laststname :",
    lastname,
    "Email :",
    email,
    "Password :",
    password,
    "Password Vérifié:",
    checkedPassword
  );

  return (
    <div className="registerCandidate">
      <div className="imgRegisterWoman" />
      <div className="formRegisterCandidate">
        <h2>Créer un compte</h2>
        <form onSubmit={sendCandidateData}>
          <label htmlFor="name">Prénom</label>
          <input
            type="text"
            placeholder="Prénom"
            onChange={handleChangeFirstname}
          />
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            placeholder="Nom"
            onChange={handleChangeLastname}
          />
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" onChange={handleChangeEmail} />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
          />
          <label htmlFor="password">Confirmation du mot de passe</label>
          <input
            type="password"
            placeholder=" Confirmation de mot de passe "
            onChange={handleChangeCheckedPassword}
          />
          <button type="submit">Créer un compte</button>
          <p>
            Déjà membre ?<span> Se connecter</span>
          </p>
          <p>
            En cliquant sur "Créer un compte", vous acceptez les
            <span>CGU</span> ainsi que notre
            <span>politique de confidentialité</span> décrivant la finalité des
            traitements de vos données personnelles.
          </p>
          {success ? <p className="messages">{success}</p> : ""}
          {error ? <p className="messages">{error}</p> : ""}
        </form>
      </div>
    </div>
  );
}
