import trait from "../assets/images/trait-jaune.png";
import "../styles/annoncedetails.css";

export default function AnnonceDetails() {
  return (
    <>
      <div className="annonceTitle">
        <h1>Développeuse Full Stack (CDI)</h1>
        <p>Paris</p>
      </div>
      <section className="annonceDetails">
        <div className="partA">
          <p>Annonce publiée le 13/11/2023</p>
          <div className="quiSommesNous">
            <h2>Qui sommes nous</h2>
            <img src={trait} alt="trait-jaune" />
            <p>
              Depuis sa création en 2015, TechNova Solutions s'est imposée comme
              un acteur incontournable de l'industrie technologique. Née au cœur
              de la de la Silicon Valley européenne, cette ESN (Entreprise de
              Services Numérique) a su combiner expertise, passion et audace
              pour révolutionner le paysage IT de la région. Vision :Orientée
              vers l'avenir, TechNova vise à anticiper les défis technologiques
              de demain. Notre mission est simple : aider nos clients à se
              transformer numériquement en offrant des solutions innovantes,
              durables et à forte valeur ajoutée.
            </p>
          </div>
          <div className="descriptionPoste">
            <h2>Description du poste</h2>
            <img src={trait} alt="trait-jaune" />
            <p>
              <ol>
                <li>
                  Développer et maintenir des applications web de haute qualité
                  en utilisant JavaScript et ses frameworks associés (par ex.
                  React, Vue.js, Node.js).
                </li>
                <li>
                  Collaborer étroitement avec l'équipe de conception UX/UI pour
                  transformer les maquettes en interfaces réactives et
                  performantes.
                </li>
                <li>
                  Participer à l'ensemble du cycle de vie des projets, de la
                  conception à la mise en production.
                </li>
                <li>
                  Identifier et résoudre les problèmes de performances et
                  d'optimisation du code.
                </li>
                <li>
                  Collaborer avec des équipes interdisciplinaires (backend,
                  designers, chefs de produits) pour assurer la cohérence et la
                  qualité des projets.
                </li>
                <li>
                  Rester à jour avec les dernières tendances et technologies en
                  matière de développement JavaScript.
                </li>
              </ol>
            </p>
          </div>
          <div className="profilRecherché">
            <h2>Profil recherché</h2>
            <img src={trait} alt="trait-jaune" />
            <ul>
              <li>
                Diplôme en informatique, en génie logiciel ou dans un domaine
                connexe.
              </li>
              <li>
                Minimum de 3 ans d'expérience en tant que développeuse
                JavaScript, avec un accent sur les applications front-end ou
                full-stack.
              </li>
            </ul>
          </div>
        </div>
        <div className="motivationText">
          <h3>TechNova Solutions</h3>
          <form action="/mycv">
            <p id="offre">
              Si cette offre vous intéresse, veuillez cliquer sur le bouton
              ci-dessus. Vous augmenterez vos chances si vous écrivez ce qui
              vous motive dans l’offre.
            </p>
            <p id="optionnel">Vos motivations (optionnel) :</p>
            <textarea name="motivations" id="motivations" cols="56" rows="22" />
            <br />
            <input
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "1rem 0",
                width: "420px",
                fontWeight: "bold",
                fontSize: "16px",
                margin: "10px",
              }}
              type="submit"
              value="Postuler"
            />
          </form>
        </div>
      </section>
    </>
  );
}
