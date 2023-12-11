import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnnonceCard from "./AnnonceCard";

export default function MyOffers() {
  const [data, setData] = useState([]);
  const deleteOffer = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/offers/${id}`)
      .then((response) => {
        console.info(response);
      });
    window.location.assign("/dashboardcompany");
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((response) => {
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
                <AnnonceCard key={offer.id} snippet={offer} />
              </Link>
            </div>

            <div className="boutonOffer">
              <button type="submit" className="btnMyOffers">
                <Link key={offer.id} to={`/updateoffer/${offer.id}`}>
                  Modifier
                </Link>
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
