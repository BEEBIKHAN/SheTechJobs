import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ExportContext from "../contexts/Context";
import entrepreneurs from "../assets/images/inscription_entreprise.png";
import "../styles/logincompany.css";

export default function LoginCompany() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { info } = useContext(ExportContext.Context);

  const navigate = useNavigate();
  const navigateToDashboard = () => {
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
        setSuccess(console.info(response.data));
        navigateToDashboard();
        window.location.reload();
        setError(false);
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
    <div className="espace_connexion_entreprise">
      <img
        className="imglogincompany"
        src={entrepreneurs}
        alt="Beautiful entrepreuneurs chatting and walking down the street while smiling"
      />
      <form className="login_form" onSubmit={sendCredentials}>
        <h2>Espace connexion</h2>
        <p>Email</p>
        <input type="text" placeholder="Email" onChange={handleChangeEmail} />
        <p>Mot de passe</p>
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handleChangePassword}
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
          type="submit"
          value="Se connecter"
        />
        <p>
          Pas encore membre ?{" "}
          <a href="/registercompany" id="register">
            S'inscrire
          </a>
        </p>
        {success ? <p>{success} && </p> : ""}
        {error ? "Email ou mot de passe incorrect" : ""}
      </form>
    </div>
  );
}
