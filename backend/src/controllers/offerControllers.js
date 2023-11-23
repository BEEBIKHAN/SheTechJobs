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
module.exports = {
  getAllOffers,
  addOffer,
};
