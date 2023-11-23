const models = require("../models");

const getAllContract = (req, res) => {
  models.contract
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getAllContract };
