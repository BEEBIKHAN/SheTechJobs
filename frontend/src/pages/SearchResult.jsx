import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnnonceCard from "../components/AnnonceCard";

export default function SearchResult() {
  const { userResearch } = useParams();
  const [data, setData] = useState([]);

  const searchTitle = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/search/${userResearch}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    searchTitle();
  }, []);

  console.info("Recherche : ", userResearch);
  console.info("Résultat de la recherche : ", data);

  return (
    <div>
      <h2>Ici sera afficher le Résultat de la recherche</h2>
      <p>{userResearch}</p>
      <div>
        {data.map((offer) => (
          <Link to={`/annonceDetails/${offer.id}`}>
            <AnnonceCard key={offer.id} snippet={offer} />
          </Link>
        ))}
      </div>
    </div>
  );
}
