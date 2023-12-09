import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";

export default function CompanyAccountManagement() {
  const companyId = localStorage.getItem("id");
  const { info } = useContext(ExportContext.Context);
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");

  const updateEmailCompany = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/company-email/${companyId}`, {
        email: updateEmail,
      })
      .then((response) => {
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

  const updatePasswordCompany = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/company-password/${companyId}`,
        {
          password: updatePassword,
        }
      )
      .then((response) => {
        console.info("Mot de passe modifié avec succès:", response.data);
      })
      .catch((err) => {
        console.error("Erreur lors de la modification du mot de passe:", err);
      });
  };

  const handleChangePassword = (e) => {
    setUpdatePassword(e.target.value);
  };

  const deleteCompany = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/company/${companyId}`)
      .then((response) => {
        console.info(response);
      });
  };

  return (
    <div className="contentaccountcompany">
      <p>Paramètres de connexion</p>
      <div className="companyEmailFormContent">
        <form className="email_form" onSubmit={(e) => e.preventDefault()}>
          <div className="actualEmailCompany">
            <label htmlFor="email">Email actuel*</label>
            <input type="email" value={info.email} />
          </div>
          <div className="newEmailCompany">
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
            onClick={updateEmailCompany}
          >
            Enregistrer
          </button>
        </form>
      </div>
      <div className="companyPasswordFormContent">
        <form className="password_form" onSubmit={(e) => e.preventDefault()}>
          <div className="actualPasswordCompany">
            <label htmlFor="password">Mot de passe actuel*</label>
            <input type="password" />
          </div>
          <div className="newPasswordCompany">
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
            onClick={updatePasswordCompany}
          >
            Enregistrer
          </button>
        </form>
      </div>
      <div className="companyDeleteAccount">
        <button
          type="button"
          className="btnAccountManagement btnDeleteAccount"
          onClick={() => deleteCompany(companyId)}
        >
          Suppression du compte
        </button>
      </div>
    </div>
  );
}
