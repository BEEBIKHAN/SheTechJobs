import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SearchResult from "../pages/SearchResult";
import AnnonceDetails from "../pages/AnnonceDetails";
import RegisterCompany from "../pages/RegisterCompany";
import RegisterCandidate from "../pages/RegisterCandidate";
import DashbordCompany from "../pages/DashbordCompany";
import ConnectionCandidate from "../pages/ConnectionCandidate";
import LoginCompany from "../pages/LoginCompany";
import AnnonceResearch from "../pages/AnnonceResearch";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:userResearch" element={<SearchResult />} />
        <Route path="/annonceDetails/:id" element={<AnnonceDetails />} />
        <Route path="/registercompany" element={<RegisterCompany />} />
        <Route path="/registercandidate" element={<RegisterCandidate />} />
        <Route path="/dashbordcompany" element={<DashbordCompany />} />
        <Route path="/connectioncandidate" element={<ConnectionCandidate />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/annonces" element={<AnnonceResearch />} />
      </Routes>
    </section>
  );
}
