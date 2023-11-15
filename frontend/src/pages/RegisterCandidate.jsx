import { useState } from "react";

export default function RegisterCandidate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
      // axios.post("http://localhost:6000/candidate",)
      setSuccess("Vous êtes enregistrée !!!");
      console.info("Vous êtes enregistrée !!!");
    } else {
      setError("Les mots de passe ne sont pas les mêmes ;(");
      console.error("Les mots de passe ne sont pas identiques");
    }
  };

  console.info(
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
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" onChange={handleChangeEmail} />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="text"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
          />
          <label htmlFor="password">Confirmation du mot de passe</label>
          <input
            type="text"
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
