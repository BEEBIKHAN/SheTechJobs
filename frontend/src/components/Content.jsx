import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SearchResult from "../pages/SearchResult";
import AnnonceDetails from "../pages/AnnonceDetails";
import RegisterCompany from "../pages/RegisterCompany";
import RegisterCandidate from "../pages/RegisterCandidate";
import DashboardCompany from "../pages/DashboardCompany";
import ConnectionCandidate from "../pages/ConnectionCandidate";
import LoginCompany from "../pages/LoginCompany";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:userResearch" element={<SearchResult />} />
        <Route path="/annonceDetails" element={<AnnonceDetails />} />
        <Route path="/registercompany" element={<RegisterCompany />} />
        <Route path="/registercandidate" element={<RegisterCandidate />} />
        <Route path="/dashboardcompany" element={<DashboardCompany />} />
        <Route path="/connectioncandidate" element={<ConnectionCandidate />} />
        <Route path="/logincompany" element={<LoginCompany />} />
      </Routes>
    </section>
  );
}
