import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <section id="not-found">
      <div id="title">404 Error Page</div>
      <div className="circles">
        <p>
          404
          <br />
          <small>PAGE NOT FOUND</small>
        </p>
        <Link to="/" className="redirection404Link">
          <p className="redirection404"> Retrouvez votre chemin</p>
        </Link>
        <span className="circle big" />
        <span className="circle med" />
        <span className="circle small" />
      </div>
    </section>
  );
}
