import { useState, useEffect } from "react";
import axios from "axios";
import AnnonceCard from "../components/AnnonceCard";

export default function AnnonceResearch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <h2>Liste des annonces</h2>
      <div className="annonce_list">
        {data.map((offer) => (
          <AnnonceCard key={offer.id} snippet={offer} />
        ))}
      </div>
    </>
  );
}
