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
      <div className="annonce_list">
        {data.map((offer) => (
          <>
            <Link key={offer.id} to={`/annonceDetails/${offer.id}`}>
              <AnnonceCard key={offer.id} snippet={offer} />
            </Link>
            <button type="submit" className="btnSpaceCompany">
              Modifier
            </button>
            <button type="submit" className="btnSpaceCompany">
              Clôturer
            </button>
            <button
              type="button"
              onClick={() => deleteOffer(offer.id)}
              className="btnSpaceCompany"
            >
              Supprimer
            </button>
          </>
        ))}
      </div>
    </div>
  );
}
