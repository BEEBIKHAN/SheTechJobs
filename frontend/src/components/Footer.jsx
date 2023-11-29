import Newsletter from "./Newsletter";
import LOGO from "../assets/images/LOGO.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img className="logoSTJ" src={LOGO} alt="Logo_SheTechJobs" />
      </div>
      <div className="paragraphs">
        <div className="footer_links">
          <div className="nosOffres">
            <h2>Nos offres</h2>
            <p>Emplois en CDI</p>
            <p>Emplois en CDD</p>
            <p>Contrats Pro/ Alternances</p>
            <p>Stages</p>
          </div>
          <div className="aPropos">
            <h2>A propos</h2>
            <p>Qui sommes-nous </p>
            <p>Conditions générales</p>
            <p>Vie privée/ Cookies </p>
            <p>Nous contactez</p>
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
