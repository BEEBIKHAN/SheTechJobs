import laughing from "../assets/icons/laughing.png";

export default function EntrepriseConnect() {
  return (
    <div className="ConnectEntreprise">
      <div className="laughing">
        <figure>
          <img src={laughing} alt=" Femmes souriantes" />
        </figure>
      </div>
      <div className="boConnectEntreprise">
        <h2>Se connecter</h2>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mot de passe " />
          <button type="submit">Se connecter</button>
          <p>
            Pas encore membre ?<span> S'inscrire</span>
          </p>
        </form>
      </div>
    </div>
  );
}
