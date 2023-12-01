/* eslint-disable camelcase */
const models = require("../models");

const postApplications = (req, res) => {
  const { appstatus, candidate_id, offer_id } = req.body;

  models.application
    .insert({ appstatus, candidate_id, offer_id })
    .then(([result]) => {
      console.info(result);
      res
        .status(201)
        .json({ Message: "Smile,,Application created successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controller",
        Error: "there is a error",
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
      res.sendStatus(500).send("error error error");
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
      res.sendStatus(500);
    });
};

module.exports = {
  postApplications,
  getAllApplications,
  getAllApplicationsById,
};
