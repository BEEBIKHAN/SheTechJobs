import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ExportContext from "../contexts/Context";

export default function ConnectionCandidate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { info } = useContext(ExportContext.Context);
  const navigate = useNavigate();

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
        localStorage.setItem("Role", response.data.role);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("lastname", response.data.lastname);
        localStorage.setItem("firstname", response.data.firstname);
        localStorage.setItem("Email", response.data.email);
        window.location.href = "/dashboardcandidate";
      })

      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (info.Role === "candidate") {
      navigate("/dashboardcandidate");
    }
  }, []);

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
