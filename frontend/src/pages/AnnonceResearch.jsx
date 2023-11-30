/* eslint-disable react/button-has-type */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import AnnonceCard from "../components/AnnonceCard";
import SearchBar from "../components/SearchBar";

export default function AnnonceResearch() {
  const [data, setData] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [selectContract, setSelectContract] = useState("");
  const [departements, setDepartements] = useState([]);
  const [selectDepartement, setSelectDepartement] = useState("");
  const [jobs, setJobs] = useState([]);
  const [selectJob, setSelectJob] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { userResearch } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((response) => {
      setData(response.data);
    });
  }, []);

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

  const getDepartement = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/departement`)
      .then((response) => {
        setDepartements(response.data);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des localisations", err);
      });
    setDepartements([]);
  };

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

  // console.info("Les types de contrat", contracts);
  // console.info("Les départements", departements);
  // console.info("Les métiers", jobs);
  // console.info("Recherche : ", userResearch);
  console.info("résultats de recherche", searchData);

  const handleSelectContract = (e) => {
    // console.info(e.target.value);
    const { value } = e.target;
    setSelectContract(value);
  };

  const handleSelectDepartement = (e) => {
    const { value } = e.target;
    setSelectDepartement(value);
  };

  const handleSelectJob = (e) => {
    const { value } = e.target;
    setSelectJob(value);
  };

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
