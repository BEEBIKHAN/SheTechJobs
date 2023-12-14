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
    // window.location.assign("/dashboardcompany");
  };

  const closeOffer = (offerId) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/offer/status/${offerId}`, {
        status: 1,
      })
      .then((response) => {
        setData((prevOffers) =>
          prevOffers.map((offer) =>
            offer.id === offerId ? response.data : offer
          )
        );
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offer/${companyId}`)
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
                <Link key={offer.id} to={`/updateoffer/${offer.id}`}>
                  Modifier
                </Link>
              </button>
              <li key={offer.id}>
                {offer.status === 1 ? "Published" : "Closed"}
                <button
                  type="submit"
                  onClick={() => {
                    closeOffer(offer.id);
                  }}
                  className="btnMyOffers"
                >
                  Clôturer
                </button>
              </li>
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
