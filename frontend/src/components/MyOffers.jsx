import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AnnonceByCompany from "./AnnonceByCompany";

export default function MyOffers() {
  const [data, setData] = useState([]);
  const [buttonStatus, setButtonStatus] = useState("");
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

  const closeOffer = (offerId, offer) => {
    const newStatus = offer.status === 0 ? 1 : 0;

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/offer/status/${offerId}`, {
        status: newStatus,
      })
      .then((response) => {
        console.info("réponse après mon update", response);
        setButtonStatus(newStatus);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const republishOffer = (offerId, offer) => {
    const newStatus = offer.status === 0 ? 1 : 0;

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/offer/status/${offerId}`, {
        status: newStatus,
      })
      .then((response) => {
        console.info("réponse après mon update", response);
        setButtonStatus(newStatus);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers-by-company/${companyId}`)
      .then((response) => {
        setData(response.data);
      });
  }, [buttonStatus]);
  console.info("data :", data);
  console.info("Le statut du bouton", buttonStatus);

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
              <ul className="ul_bouton_myoffer">
                <li className="btnMyOffers" key={offer.id}>
                  {offer.status === 0 ? "Clôturer" : ""}
                  <button
                    id="btnclose"
                    label="1"
                    type="button"
                    onClick={() => {
                      closeOffer(offer.id, offer);
                    }}
                  />
                </li>
              </ul>
              <ul className="ul_bouton_myoffer">
                <li className="btnMyOffers" key={offer.id}>
                  {offer.status === 1 ? "Republier" : ""}
                  <button
                    label="1"
                    type="button"
                    onClick={() => {
                      republishOffer(offer.id, offer);
                    }}
                  />
                </li>
              </ul>
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
