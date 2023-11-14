import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SearchResult from "../pages/SearchResult";
import AnnonceDetails from "../pages/AnnonceDetails";
import RegisterCandidate from "../pages/RegisterCandidate";
import Connexion from "../pages/Connexion";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:userResearch" element={<SearchResult />} />
        <Route path="/annonceDetails" element={<AnnonceDetails />} />
        <Route path="/registercandidate" element={<RegisterCandidate />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </section>
  );
}
