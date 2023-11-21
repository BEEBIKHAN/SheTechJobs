const models = require("../models");

const getAllOffers = (req, res) => {
  models.offer
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addOffer = (req, res) => {
  const offer = req.body;

  models.offer
    .insert(offer)
    .then(([result]) => {
      console.info(result);
      res.status(200).send("L'annonce a bien été ajoutée");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de sauvegarde");
    });
};

// const offer = (req, res) => {
//   res.status(200).json({
//     id: "1",
//     title: "Développeuse full stack",
//     company_description:
//       "Spécialisée dans la tech, la Wild Code School est une entreprise ou vous aurez les codes.",
//     job_description:
//       "En tant que développeuse web full stack, au sein d'une équipe de 5 développeuse, vous serez amenée à réaliser une application web et web mobile pour l'un de nos clients.",
//     profil_required: "Développeuse full stack, Javacript, React et HTML",
//     status: "1",
//     date: "20/10/2023",
//     contract_id: "1",
//     departement_id: "1",
//     job_id: "1",
//     company_id: "1",
//   });
// };

module.exports = {
  getAllOffers,
  // offer,
  addOffer,
};
