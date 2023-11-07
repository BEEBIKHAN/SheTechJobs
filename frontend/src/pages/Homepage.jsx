import React from "react";
import loop from "../assets/icons/loop.png";
import rocket from "../assets/icons/rocket.png";
import girl from "../assets/icons/girl.png";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
}
