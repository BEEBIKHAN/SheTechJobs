// export default function SearchResult() {
//   return <h2>Résultat de la recherche</h2>;
// }
import { useState, useEffect } from "react";
import axios from "axios";
import AnnonceCard from "../components/AnnonceCard";

export default function SearchResult() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offer`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="annonce_list">
      {data.map((offer) => (
        <AnnonceCard key={offer.id} details={offer} />
      ))}
    </div>
  );
}
