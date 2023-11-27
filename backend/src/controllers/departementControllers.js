const models = require("../models");

const getAllDepartement = (req, res) => {
  models.departement
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getAllDepartement };
