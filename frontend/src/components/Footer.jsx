import React from "react";
import "../Style/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <h1>
          She<span>Tech</span>Job
        </h1>
      </div>
      <div className="paragraphs">
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
    </div>
  );
}
