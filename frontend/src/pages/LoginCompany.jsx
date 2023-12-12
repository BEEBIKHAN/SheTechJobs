import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import entrepreneurs from "../assets/images/inscription_entreprise.png";
import "../styles/logincompany.css";
import ExportContext from "../contexts/Context";

export default function LoginCompany() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { info } = useContext(ExportContext.Context);

  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/dashboardcompany");
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
        localStorage.setItem("Role", response.data.role);
        localStorage.setItem("companyName", response.data.companyName);
        localStorage.setItem("Email", response.data.email);
        localStorage.setItem("Siret", response.data.siret);
        localStorage.setItem("id", response.data.id);
        setError(false);
        navigateToHomepage();
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  useEffect(() => {
    if (info.Role === "company") {
      navigate("/dashboardcompany");
    }
  }, []);

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

          <button className="btnLogin" type="submit">
            Se connecter
          </button>
          <p>
            Pas encore membre ?{" "}
            <a href="/registercompany" id="register">
              S'inscrire
            </a>
          </p>
        </form>
      </div>
      {error ? "Email ou mot de passe incorrect" : ""}
    </>
  );
}
