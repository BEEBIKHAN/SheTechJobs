import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AnnonceDetails from "../pages/AnnonceDetails";
import RegisterCompany from "../pages/RegisterCompany";
import RegisterCandidate from "../pages/RegisterCandidate";
import DashboardCandidate from "../pages/DashboardCandidate";
import DashboardCompany from "../pages/DashboardCompany";
import LoginCandidate from "../pages/LoginCandidate";
import LoginCompany from "../pages/LoginCompany";
import AnnonceResearch from "../pages/AnnonceResearch";
import UpdateOffer from "../pages/UpdateOffer";
import SearchResult from "../pages/SearchResult";
import Page404 from "../pages/Page404";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:userResearch" element={<SearchResult />} />
        <Route path="/search/type/:userResearch" element={<SearchResult />} />
        <Route path="/annonceDetails/:id" element={<AnnonceDetails />} />
        <Route path="/registercompany" element={<RegisterCompany />} />
        <Route path="/registercandidate" element={<RegisterCandidate />} />
        <Route path="/dashboardcandidate" element={<DashboardCandidate />} />
        <Route path="/dashboardcompany" element={<DashboardCompany />} />
        <Route path="/logincandidate" element={<LoginCandidate />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/annonces" element={<AnnonceResearch />} />
        <Route path="/updateoffer/:id" element={<UpdateOffer />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </section>
  );
}
