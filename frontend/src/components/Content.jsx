import { useContext } from "react";
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
import PrivateRoute from "../../../backend/src/services/PrivateRoute";
import ExportContext from "../contexts/Context";
import Page404 from "../pages/Page404";
import CandidateMyApplications from "./CandidateMyApplications";
import MonCV from "./MonCv";

export default function Content() {
  const { info } = useContext(ExportContext.Context);
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:userResearch" element={<SearchResult />} />
        <Route path="/search/type/:userResearch" element={<SearchResult />} />
        <Route path="/annonceDetails/:id" element={<AnnonceDetails />} />
        <Route path="/registercompany" element={<RegisterCompany />} />
        <Route path="/registercandidate" element={<RegisterCandidate />} />
        <Route
          path="/dashboardcandidate"
          element={
            <PrivateRoute isAllowed={info.Role === "candidate"}>
              {" "}
              <DashboardCandidate />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboardcompany"
          element={
            <PrivateRoute isAllowed={info.Role === "company"}>
              {" "}
              <DashboardCompany />
            </PrivateRoute>
          }
        />
        <Route path="/logincandidate" element={<LoginCandidate />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/annonces" element={<AnnonceResearch />} />
        <Route path="/updateoffer/:id" element={<UpdateOffer />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/myapplications" element={<CandidateMyApplications />} />
        <Route path="/mycv" element={<MonCV />} />
      </Routes>
    </section>
  );
}
