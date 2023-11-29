/* eslint-disable react/button-has-type */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnnonceCard from "../components/AnnonceCard";

export default function AnnonceResearch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((response) => {
      setData(response.data);
    });
  }, []);
  // console.info("id", value);
  console.info("data :", data);
  return (
    <>
      <h2>Liste des annonces</h2>
      <div className="annonce_list">
        {data.map((offer) => (
          <div>
            <Link key={offer.id} to={`/annonceDetails/${offer.id}`}>
              <AnnonceCard key={offer.id} snippet={offer} />
              {/* VOIR L'ANNONCE */}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
