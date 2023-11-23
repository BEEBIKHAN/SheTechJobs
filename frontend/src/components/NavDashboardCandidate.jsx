import { Link } from "react-router-dom";

export default function NavDashboardCandidate() {
  return (
    <div className="dashboard_Candidate">
      <ul className="nav_candidate">
        <li>
          <Link to="/mon_espace" className="Mon_Espace">
            Mon Espace
          </Link>
        </li>
        <li>
          <Link to="/mon_cv" className="option">
            {" "}
            Mon CV
          </Link>
        </li>
        <li>
          <Link to="/mes_candidatures" className="option">
            Mes Candidatures
          </Link>
        </li>
        <li>
          <Link to="/mes_alertes" className="option">
            Mes alertes
          </Link>
        </li>
        <li>
          <Link to="/gerer_son_compte" className="gerer_compte">
            Gérer son compte
          </Link>
        </li>
      </ul>
    </div>
  );
}
