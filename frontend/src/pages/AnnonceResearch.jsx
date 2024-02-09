/* eslint-disable react/button-has-type */
import axios from "axios"; // import de la librairie pour faire des requêtes HTTP
import { useParams, Link } from "react-router-dom"; // Pour le routage de l'application
// import des hook pour gestion d'état du composant et effet après affichage du composant
import { useState, useEffect } from "react";
// Import des composants nécéssaires à la recherche
import AnnonceCard from "../components/AnnonceCard";
import SearchBar from "../components/SearchBar";

export default function AnnonceResearch() {
  const { userResearch } = useParams();
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [selectContract, setSelectContract] = useState("");
  const [departements, setDepartements] = useState([]);
  const [selectDepartement, setSelectDepartement] = useState("");
  const [jobs, setJobs] = useState([]);
  const [selectJob, setSelectJob] = useState("");

  // Affichage de toutes les annonces au chargement
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((response) => {
      setData(response.data);
    });
  }, []);

  // Les types de contrat
  const getContract = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contract`)
      .then((response) => {
        // console.info(response.data);
        setContracts(response.data);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des types de contrat", err);
      });
    setContracts([]);
  };

  // Les départements
  const getDepartement = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/departement`)
      .then((response) => {
        setDepartements(response.data);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des départements", err);
      });
    setDepartements([]);
  };

  // Les métiers
  const getJob = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job`)
      .then((response) => {
        setJobs(response.data);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des métiers", err);
      });
    setJobs([]);
  };

  // Recherche par mot clé
  const searchTitle = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/search/${userResearch}`)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getContract();
  }, []);

  useEffect(() => {
    getDepartement();
  }, []);

  useEffect(() => {
    getJob();
  }, []);

  useEffect(() => {
    searchTitle();
  }, []);

  console.info("résultats de recherche", searchData);

  // type de contrat selectionné
  const handleSelectContract = (e) => {
    // console.info(e.target.value);
    const { value } = e.target;
    setSelectContract(value);
  };

  // département selectionné
  const handleSelectDepartement = (e) => {
    const { value } = e.target;
    setSelectDepartement(value);
  };

  // métier selectionné
  const handleSelectJob = (e) => {
    const { value } = e.target;
    setSelectJob(value);
  };

  // Affichage de la page recherche d'annonce
  return (
    <>
      <div className="searchBar_offersResults">
        <SearchBar />
      </div>
      <div className="filters">
        <div className="contractFilter filter">
          <select onChange={handleSelectContract}>
            <option value="">--Type de contrat--</option>
            {contracts.map((contract) => (
              <option key={contract.id}>{contract.type}</option>
            ))}
          </select>
        </div>
        <div className="departementFilter filter">
          <select onChange={handleSelectDepartement}>
            <option value="">--Localisation--</option>
            {departements.map((departement) => (
              <option key={departement.id}>{departement.name}</option>
            ))}
          </select>
        </div>
        <div className="jobFilter filter">
          <select onChange={handleSelectJob}>
            <option value="">--Métier--</option>
            {jobs.map((job) => (
              <option key={job.id}>{job.name}</option>
            ))}
          </select>
        </div>
      </div>
      <h2 id="annonce_h2">Liste des annonces</h2>
      <div className="annonce_list">
        {data
          .filter((contract) => {
            return contract.type.includes(selectContract);
          })
          .filter((departement) => {
            return departement.localisation.includes(selectDepartement);
          })
          .filter((job) => {
            return job.métier.includes(selectJob);
          })
          .map((offer) => (
            <div>
              <Link key={offer.id} to={`/annonceDetails/${offer.id}`}>
                <AnnonceCard key={offer.id} snippet={offer} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
