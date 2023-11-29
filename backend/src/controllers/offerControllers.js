const models = require("../models");

const getAllOffers = (req, res) => {
  models.offer
    .findAllOffers()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllOffersById = (req, res) => {
  models.offer
    .findAllOffersById(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
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
const searchOfferByWord = (req, res) => {
  const { title } = req.params;
  models.offer.findOffersByWord(title).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

module.exports = {
  getAllOffers,
  getAllOffersById,
  addOffer,
  searchOfferByWord,
};
