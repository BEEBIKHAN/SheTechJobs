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

const editOffer = (req, res) => {
  const { id } = req.params;
  const offer = req.body;

  console.error("test", offer);

  models.offer
    .update(offer, id)
    .then(([result]) => {
      console.info(result);
      res.status(200).send("L'offre' a bien été modifiée");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur lors de la modification");
    });
};

const deleteOffer = (req, res) => {
  const { id } = req.params;
  console.info("ID DELETE: ", id);
  models.offer.delete(id).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).send(result);
    } else {
      res.status(200).send("Offre supprimée avec succès");
    }
  });
};

module.exports = {
  getAllOffers,
  getAllOffersById,
  addOffer,
  editOffer,
  deleteOffer,
  searchOfferByWord,
};
