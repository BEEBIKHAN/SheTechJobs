import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AnnonceByCompany from "./AnnonceByCompany";

export default function MyOffers() {
  const [data, setData] = useState([]);
  const companyId = localStorage.getItem("id");

  console.info("Voici l'id de l'entreprise", companyId);

  const deleteOffer = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/offers/${id}`)
      .then((response) => {
        console.info(response);
      });
    window.location.assign("/dashboardcompany");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers-by-company/${companyId}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);
  console.info("data :", data);

  return (
    <div className="contentmyoffers">
      <div className="annonce_listOffer">
        {data.map((offer) => (
          <>
            <div className="EspaceEntrepriseCard">
              <Link key={offer.id} to={`/annonceDetails/${offer.id}`}>
                <AnnonceByCompany key={offer.id} card={offer} />
              </Link>
            </div>

            <div className="boutonOffer">
              <button type="submit" className="btnMyOffers">
                Modifier
              </button>
              <button type="submit" className="btnMyOffers">
                Clôturer
              </button>
              <button
                type="button"
                onClick={() => deleteOffer(offer.id)}
                className="btnMyOffers"
              >
                Supprimer
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
