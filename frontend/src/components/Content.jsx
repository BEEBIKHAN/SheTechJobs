import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SearchResult from "../pages/SearchResult";
import AnnonceDetails from "../pages/AnnonceDetails";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/:userResearch" element={<SearchResult />} />
        <Route path="/annonceDetails" element={<AnnonceDetails />} />
        <Route path="/login" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </section>
  );
}
