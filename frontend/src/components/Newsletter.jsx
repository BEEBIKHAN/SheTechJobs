import "../styles/footer.css";
import "../styles/app.css";

import { useState } from "react";

export default function Newsletter() {
  const [mail, setMail] = useState("");
  function handleMail(e) {
    const { value } = e.target;
    setMail(value);
    console.info(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.info(mail);
  }

  return (
    <div className="divNewsLetter">
      <h3>Newsletter</h3>
      <p>
        Inscrivez-vous à la newsletter et recevez en exclusivité les offres les
        plus incroyables avant qu’elles ne soient publiées !
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="firstInput"
          type="text"
          placeholder="Saisissez votre adresse email"
          value={mail}
          onChange={handleMail}
        />
        <input className="valider" type="submit" value="Valider" />
      </form>
    </div>
  );
}
