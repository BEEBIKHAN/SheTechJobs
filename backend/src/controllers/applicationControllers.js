/* eslint-disable camelcase */
const models = require("../models");

const postApplication = (req, res) => {
  const { application_status, candidate_id, offer_id } = req.body;

  models.application
    .insert({ application_status, candidate_id, offer_id })
    .then(([result]) => {
      console.info(result);
      res
        .status(201)
        .json({ Message: "La candidature a été ajoutée avec succès" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controller",
        Error: "Il y'a une erreur",
        Reason: err.sqlMessage,
      });
    });
};

const postApplicationWithMotivations = (req, res) => {
  const { application_status, motivations, candidate_id, offer_id } = req.body;

  models.application
    .insertWithMotivations({
      application_status,
      motivations,
      candidate_id,
      offer_id,
    })
    .then(([result]) => {
      console.info(result);
      res.status(201).json({
        Message:
          "La candidature et les motivations ont été ajoutées avec succès",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controller",
        Error: "Il y'a une erreur",
        Reason: err.sqlMessage,
      });
    });
};

const getAllApplications = (req, res) => {
  models.application
    .findAllApplications()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500).send("Erreur lors du chargement des candidatures");
    });
};

const getAllApplicationsById = (req, res) => {
  models.application
    .findAllApplicationsById(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500).send("Erreur lors du chargemernt de la candidature");
    });
};
const getListApplicationsByOffer = (req, res) => {
  console.info("applications by offer route ");
  const { id } = req.params;

  models.application
    .findListApplicationsByOffer(id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
        console.info("success ");
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500).send("Erreur lors du chargemernt de la candidature");
    });
};
const updateApplicationStatus = (req, res) => {
  const { id } = req.params;
  const { application_status } = req.body;
  console.info("Req.body de l'update application status :", req.body);
  models.application
    .updateStatus(application_status, id)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({
        Message: "Le status de la candidate a été modifié avec succès",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Message: "Erreur lors de la modification de application status",
      });
    });
};

module.exports = {
  postApplication,
  postApplicationWithMotivations,
  getAllApplications,
  getAllApplicationsById,
  getListApplicationsByOffer,
  updateApplicationStatus,
};
