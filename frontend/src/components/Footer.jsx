import "../styles/footer.css";
import "../styles/app.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <h1>
          she<span>tech</span>jobs
        </h1>
      </div>

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
          <p>Nous contacter</p>
        </div>
      </div>
    </div>
  );
}
