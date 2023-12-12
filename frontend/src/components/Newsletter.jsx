import { useState } from "react";
import axios from "axios";
/* import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; */

export default function Newsletter() {
  const [email, setEmail] = useState("");

  /* const notify = () =>
    toast("Vous êtes bien enregistrée. Bienvenue chez SheTechJobs !"); */

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.info(email);
  };

  const registerNewletter = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/newsletter`, {
        email,
      })
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /* const handleSubmit = (event) => {
    event.preventDefault();
    registerNewletter()
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
    console.info(email);
  }; */

  return (
    <div className="divNewsLetter">
      <h3>Newsletter</h3>
      <p>
        Inscrivez-vous à la newsletter et recevez en exclusivité les offres les
        plus incroyables avant qu’elles ne soient publiées !
      </p>
      <form onSubmit={registerNewletter}>
        <input
          className="firstInput"
          type="email"
          placeholder="Saisissez votre adresse email"
          onChange={handleEmail}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
