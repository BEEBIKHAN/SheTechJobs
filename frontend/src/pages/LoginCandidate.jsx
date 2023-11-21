import axios from "axios";
import { useState } from "react";

export default function LoginCandidate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendCredentials = (event) => {
    event.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.info("Connection Réussir");
        console.info(response);
      })
      .catch((err) => {
        console.error(err);
      });

    console.info("Email :", email, "Password :", password);
  };

  return (
    <div className="connectionCandidate">
      <div className="imgConnectionWoman" />
      <div className="formConnectionCandidate">
        <h2>Se Connecter</h2>
        <form onSubmit={sendCredentials}>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" onChange={handleChangeEmail} />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
          />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}
