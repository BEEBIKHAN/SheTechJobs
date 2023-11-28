import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import AnnonceCard from "../components/AnnonceCard";

export default function SearchResult() {
  const { userResearch } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((response) => {
      setData(response.data);
    });
  }, []);

  // console.info("id", value);
  console.info("data :", data);

  /* useEffect(() => {
    axios.get`${import.meta.env.VITE_BACKEND_URL}/offers/{userResearch}`.then(
      (response) => {
        setData(response.data);
      }
    );
  }, []);
  console.log(data) */

  return (
    <div className="searchResult">
      <h2>Ici sera afficher le Résultat de la recherche</h2>
      <p>{userResearch}</p>
      {/* <div>
        {data.map((result) => {AnnonceCard  key= {result.id details={result} />})}
  </div> */}
    </div>
  );
}
