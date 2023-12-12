import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AnnonceDetails from "../pages/AnnonceDetails";
import RegisterCompany from "../pages/RegisterCompany";
import RegisterCandidate from "../pages/RegisterCandidate";
import DashboardCandidate from "../pages/DashboardCandidate";
import DashboardCompany from "../pages/DashboardCompany";
import ConnectionCandidate from "../pages/ConnectionCandidate";
import LoginCompany from "../pages/LoginCompany";
import AnnonceResearch from "../pages/AnnonceResearch";
import SearchResult from "../pages/SearchResult";
import Page404 from "../pages/Page404";
import Candidature from "./Candidature";
import DetailCandidature from "./DetailCandidature";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:userResearch" element={<SearchResult />} />
        <Route path="/annonceDetails/:id" element={<AnnonceDetails />} />
        <Route path="/registercompany" element={<RegisterCompany />} />
        <Route path="/registercandidate" element={<RegisterCandidate />} />
        <Route path="/dashboardcandidate" element={<DashboardCandidate />} />
        <Route path="/dashboardcompany" element={<DashboardCompany />} />
        <Route path="/connectioncandidate" element={<ConnectionCandidate />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/annonces" element={<AnnonceResearch />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="/candidature" element={<Candidature />} />
        <Route path="/detailcandidature" element={<DetailCandidature />} />
      </Routes>
    </section>
  );
}
