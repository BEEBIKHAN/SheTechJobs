import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ExportContext from "../contexts/Context";

export default function RegisterAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { info } = useContext(ExportContext.Context);
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeCheckedPassword = (event) => {
    setCheckedPassword(event.target.value);
  };

  const sendAdminData = (event) => {
    event.preventDefault();

    if (password === checkedPassword) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/admin`, {
          email,
          password,
        })
        .then((response) => {
          setSuccess(console.info(response.data));
          toast.success("Vous êtes bien enregistré !");
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

  useEffect(() => {
    if (info.Role === "admin") {
      navigate("/backoffice");
    }
  }, []);
  return (
    <div className="registerCandidate">
      <div className="imgRegisterWoman" />
      <div className="formRegisterCandidate">
        <h2>Créer un compte</h2>
        <form className="register_form_candidate" onSubmit={sendAdminData}>
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
          <p className="pregistercandidate">
            Déjà membre ?{" "}
            <a href="/loginadmin" id="spanSeconnecter">
              Se connecter
            </a>
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
