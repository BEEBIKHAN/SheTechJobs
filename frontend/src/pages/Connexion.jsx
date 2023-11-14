import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendLoggin = (event) => {
    event.preventDefault();

    axios
      .post(
        `${import.meta.env.Vite_BACKEND_URL}/connexion`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.info(response);
        setError(false);
        navigateToHomepage();
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  console.info("Email :", email, "Password :", password);

  return (
    <div className="connexion" onSubmit={sendLoggin}>
      <div className="imgConnexion" />
      <div className="formConnexion">
        <h2>Se connecter</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" onChange={handleChangeEmail} />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="text"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
          />
          <button type="submit">Se connecter</button>

          <p>
            Pas encore membre ?<span> S'inscrire</span>
          </p>

          {error ? (
            <p className="messages">Votre email ou password est incorrect ;(</p>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
