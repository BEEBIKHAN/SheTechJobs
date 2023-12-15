import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.info(email);
  };

  const registerNewletter = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/newsletter`, {
        email,
      })
      .then((response) => {
        const actualResponse = response.data;
        toast.success(actualResponse.message);
      })
      .catch((err) => {
        const actualError = err.response ? err.response.data : err;
        console.error(actualError);
        if (actualError.error === '"email" is not allowed to be empty') {
          toast.error("L'email ne peut pas être vide");
        } else if (actualError.error === 1062) {
          toast.error("L'email est déjà enregistré");
        } else {
          console.error(actualError.error);
        }
      });
  };

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
        <input type="submit" className="valider" />
      </form>
      <ToastContainer />
    </div>
  );
}
