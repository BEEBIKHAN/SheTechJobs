import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import entrepreneurs from "../assets/images/inscription_entreprise.png";
import "../styles/logincompany.css";

export default function LoginCompany() {
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

  const sendCredentials = (event) => {
    event.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login-company`,
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

  return (
    <>
      <div className="espace_connexion_entreprise">
        <img
          className="imglogincompany"
          src={entrepreneurs}
          alt="Beautiful entrepreuneurs chatting and walking down the street while smiling"
        />
        <form className="login_form" onSubmit={sendCredentials}>
          <h2>Espace connexion</h2>
          <p>Email</p>
          <input type="text" onChange={handleChangeEmail} />
          <p>Mot de passe</p>
          <input type="password" onChange={handleChangePassword} />
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
            type="submit"
            value="Se connecter"
          />
          <p>
            Pas encore membre ?{" "}
            <a href="/registercompany" id="register">
              S'inscrire
            </a>
          </p>
        </form>
      </div>
      {error ? "Email ou password incorrects" : ""}
    </>
  );
}
