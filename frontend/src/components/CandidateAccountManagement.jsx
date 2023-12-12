import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ExportContext from "../contexts/Context";

export default function CompanyAccountManagement() {
  const candidateId = localStorage.getItem("id");
  const { info } = useContext(ExportContext.Context);
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const navigate = useNavigate();

  const updateEmailCandidate = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/candidate-email/${candidateId}`,
        {
          email: updateEmail,
        }
      )
      .then((response) => {
        toast.success("L'email a bien été modifié !");
        console.info("Email modifié avec succès:", response.data, updateEmail);
      })
      .catch((err) => {
        console.error("Erreur lors de la modification de l'email:", err);
      });
  };

  const handleChangeEmail = (e) => {
    setUpdateEmail(e.target.value);
  };

  useEffect(() => {
    console.info("Voici l'email modifié:", updateEmail);
  }, []);

  const updatePasswordCandidate = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/candidate-password/${candidateId}`,
        {
          hashedPassword: updatePassword,
        }
      )
      .then((response) => {
        console.info("Mot de passe modifié avec succès:", response.data);
        toast.success("Le mot de passe a bien été modifié.");
      })
      .catch((err) => {
        console.error("Erreur lors de la modification du mot de passe:", err);
      });
  };

  const handleChangePassword = (e) => {
    setUpdatePassword(e.target.value);
  };

  const deleteCandidate = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/candidate/${candidateId}`)
      .then((response) => {
        console.info(response);
        navigate("/");
      });
  };

  return (
    <div className="contentaccountcandidate">
      <p>Paramètres de connexion</p>
      <div className="candidateEmailFormContent">
        <form className="email_form" onSubmit={(e) => e.preventDefault()}>
          <div className="actualEmailCandidate">
            <label htmlFor="email">Email actuel*</label>
            <input type="email" value={info.email} />
          </div>
          <div className="newEmailCandidate">
            <div className="newEmail">
              <label htmlFor="email">Nouvel email*</label>
              <input
                type="email"
                onChange={handleChangeEmail}
                value={updateEmail}
              />
            </div>
            <div className="confirmNew">
              <label htmlFor="email">Confirmation nouvel email*</label>
              <input
                type="email"
                onChange={handleChangeEmail}
                value={updateEmail}
              />
            </div>
          </div>
          <button
            type="button"
            className="btnAccountManagement"
            onClick={updateEmailCandidate}
          >
            Enregistrer
          </button>
        </form>
      </div>
      <div className="candidatePasswordFormContent">
        <form className="password_form" onSubmit={(e) => e.preventDefault()}>
          <div className="actualPasswordCandidate">
            <label htmlFor="password">Mot de passe actuel*</label>
            <input type="password" />
          </div>
          <div className="newPasswordCandidate">
            <div className="newPassword">
              <label htmlFor="email">Nouveau mot de passe*</label>
              <input
                type="password"
                onChange={handleChangePassword}
                value={updatePassword}
              />
            </div>
            <div className="confirmNew">
              <label htmlFor="email">Confirmation nouveau mot de passe*</label>
              <input
                type="password"
                onChange={handleChangePassword}
                value={updatePassword}
              />
            </div>
          </div>

          <button
            type="button"
            className="btnAccountManagement"
            onClick={updatePasswordCandidate}
          >
            Enregistrer
          </button>
        </form>
      </div>
      <div className="candidateDeleteAccount">
        <button
          type="button"
          className="btnAccountManagement"
          onClick={() => deleteCandidate(candidateId)}
        >
          Suppression du compte
        </button>
      </div>
    </div>
  );
}
