const models = require("../models");

const getAllJob = (req, res) => {
  models.job
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getAllJob };
