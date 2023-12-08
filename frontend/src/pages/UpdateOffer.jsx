/* eslint-disable no-shadow */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UpdateContentOffer from "../components/UpdateContentOffer";

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

  // const editOffer = (id) => {
  //   axios
  //     .put(`${import.meta.env.VITE_BACKEND_URL}/offers/${id}`)
  //     .then((response) => {
  //       console.info(response);
  //     });
  //   window.location.assign("/dashboardcompany");
  // };

  return (
    <div className="updateContent">
      <h1>Modification de l'annonce</h1>
      {data.map((annonce) => (
        <UpdateContentOffer key={annonce.id} annonce={annonce} />
      ))}
    </div>
  );
}
