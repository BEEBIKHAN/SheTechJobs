import { Link } from "react-router-dom"; // Assurez-vous d'importer le composant Link depuis React Router

export default function NavDashbordCompany() {
  return (
    <div className="nav_dashbord_company">
      <ul className="ul_dashbord_company">
        <li>
          <Link to="/" className="espace_entreprise middle">
            Espace entreprise
          </Link>
        </li>
        <li>
          <Link to="/" className="middle">
            {" "}
            Publier une annonce
          </Link>
        </li>
        <li>
          <Link to="/" className="middle">
            Mes annonces
          </Link>
        </li>
        <li>
          <Link to="/" className="middle">
            Candidatures
          </Link>
        </li>
        <li>
          <Link to="/" className="gerer_son_compte middle">
            Gérer son compte
          </Link>
        </li>
      </ul>
    </div>
  );
}
