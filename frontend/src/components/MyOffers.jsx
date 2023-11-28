import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnnonceCard from "./AnnonceCard";

export default function MyOffers() {
  const [data, setData] = useState([]);

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
              VOIR L'ANNONCE
            </Link>
            <button type="submit" className="btnSpaceCompany">
              Modifier
            </button>
            <button type="submit" className="btnSpaceCompany">
              Clôturer
            </button>
            <button type="submit" className="btnSpaceCompany">
              Supprimer
            </button>
          </>
        ))}
      </div>
    </div>
  );
}
