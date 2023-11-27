import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AnnonceContent from "../components/AnnonceContent";

export default function AnnonceDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getAnnonceDetails = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAnnonceDetails();
  }, []);

  // console.info("coucou c'est Maurane", data);
  return (
    <>
      <h1>Détails de l'annonce</h1>
      {data.map((annonce) => (
        <AnnonceContent key={annonce.id} annonce={annonce} />
      ))}
    </>
  );
}
