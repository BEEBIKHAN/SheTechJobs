import frame from "../assets/images/frame.png";
import "../styles/homepage.css";

export default function Homepage() {
  return (
    <section>
      <div className="header_general">
        <div className="left_side">
          <div className="title">
            <h3>
              Votre talent <br /> au service <br /> de la tech
            </h3>
          </div>
          <div className="dropdown_menu">
            <select id="dropdown" onChange="selectOption()">
              <option>CDD</option>
              <option>CDI</option>
              <option>Alternance contrat pro/apprentissage</option>
              <option>Stage</option>
            </select>
          </div>
          <br />
        </div>
        <div className="img">
          <img src={frame} alt="fille au clavier" />
        </div>
      </div>
      <div className="search_bar">
        <input
          id="search_input"
          type="search"
          placeholder="Quel emploi recherchez-vous ?"
        />
        <button id="search_btn" type="button">
          Rechercher
        </button>
      </div>
    </section>
  );
}
