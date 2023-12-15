import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnnonceCard from "../components/AnnonceCard";
import SearchBar from "../components/SearchBar";

export default function SearchResult() {
  const { userResearch } = useParams();
  const [searchData, setSearchData] = useState([]);
  // const [data, setData] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [selectContract, setSelectContract] = useState("");
  const [departements, setDepartements] = useState([]);
  const [selectDepartement, setSelectDepartement] = useState("");
  const [jobs, setJobs] = useState([]);
  const [selectJob, setSelectJob] = useState("");

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

  const searchContract = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/offers/search/type/${userResearch}`
      )
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const getOffers = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/offers/search/${userResearch}`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const getContract = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contract`)
      .then((response) => {
        setContracts(response.data);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des types de contrat", err);
      });
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
  };

  useEffect(() => {
    searchTitle();
  }, []);

  useEffect(() => {
    searchContract();
  }, []);

  // useEffect(() => {
  //   getOffers();
  // }, []);

  useEffect(() => {
    getContract();
  }, []);

  useEffect(() => {
    getDepartement();
  }, []);

  useEffect(() => {
    getJob();
  }, []);

  //   console.info("Recherche : ", userResearch);
  //   console.info("Résultat de la recherche : ", data);

  console.info("Les contrats:", contracts);

  const handleSelectContract = (e) => {
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

  // console.info("mes data:", data);

  return (
    <div>
      <div className="searchBar_offersResults">
        <SearchBar />
      </div>
      <h3>Résultats de la recherche pour : {userResearch}</h3>
      <div className="filters">
        <div className="contractFilter filter">
          <select onChange={handleSelectContract}>
            <option value="">--Type de contrat--</option>
            {contracts.map((contract) => (
              <option key={contract.id} value={contract.type}>
                {contract.type}
              </option>
            ))}
          </select>
        </div>
        <div className="departementFilter filter">
          <select onChange={handleSelectDepartement}>
            <option value="">--Localisation--</option>
            {departements.map((departement) => (
              <option key={departement.id} value={departement.name}>
                {departement.name}
              </option>
            ))}
          </select>
        </div>
        <div className="jobFilter filter">
          <select onChange={handleSelectJob}>
            <option value="">--Métier--</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.name}>
                {job.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="annonce_list">
        {searchData
          .filter((offer) => {
            return offer.type.includes(selectContract);
          })
          .filter((offer) => {
            return offer.localisation.includes(selectDepartement);
          })
          .filter((offer) => {
            return offer.métier.includes(selectJob);
          })
          .map((offer) => (
            <div className="research_list">
              <Link to={`/annonceDetails/${offer.id}`}>
                <AnnonceCard key={offer.id} snippet={offer} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
