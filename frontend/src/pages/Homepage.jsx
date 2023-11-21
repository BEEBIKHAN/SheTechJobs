import React from "react";
import loop from "../assets/icons/loop.png";
import rocket from "../assets/icons/rocket.png";
import girl from "../assets/icons/girl.png";
import frame from "../assets/images/frame.png";

export default function Homepage() {
  const items = [
    {
      id: "loop",
      icon: loop,
      title: "Des milliers d'offres",
      description:
        "Sur shetechjobs, vous aurez accès à une grande variété d’offres aussi bien pour les profils juniors que seniors.",
      action: "Accéder aux offres",
    },
    {
      id: "rocket",
      icon: rocket,
      title: "Boostez votre entreprise",
      description:
        "Donnez un nouvel élan à votre entreprise en recrutant des candidates plus déterminées que jamais.",
      action: "Déposer une annonce",
    },
    {
      id: "girl",
      icon: girl,
      title: "Épanouissez-vous",
      description:
        "Intégrez une entreprise qui est en total accord avec votre vision du monde professionnel inspirant et épanouissant.",
      action: "Enregistrez votre CV",
    },
  ];

  return (
    <>
      <section>
        <div className="header_general">
          <div className="left_side">
            <div className="title">
              <h3>
                Votre talent <br /> au service <br /> de la tech
              </h3>
            </div>
            <div className="dropdown_menu">
              <select id="dropdown" onChange="selectOption()">
                <option>CDD</option>
                <option>CDI</option>
                <option>Alternance contrat pro/apprentissage</option>
                <option>Stage</option>
              </select>
            </div>
            <br />
          </div>
          <div className="img">
            <img src={frame} alt="fille au clavier" />
          </div>
        </div>
        <div className="search_bar">
          <input
            id="search_input"
            type="search"
            placeholder="Quel emploi recherchez-vous ?"
          />
          <button id="search_btn" type="button">
            Rechercher
          </button>
        </div>
      </section>
      <div className="bodyGeneral">
        <div className="Title">
          <p>Pourquoi utiliser shetechjobs ?</p>
        </div>
        <div className="iconsContainer">
          {items.map((item) => (
            <div key={item.id} className={item.id}>
              <figure>
                <img src={item.icon} alt={`Icons ${item.id}`} />
              </figure>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h4>{item.action}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
