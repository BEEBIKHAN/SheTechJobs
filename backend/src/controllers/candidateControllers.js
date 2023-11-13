const models = require("../models");

const getAllCandidates = (req, res) => {
  models.candidate
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postCandidate = (req, res) => {
  const { firstname, lastname, email, hashedPassword } = req.body;

  models.candidate
    .insert(firstname, lastname, email, hashedPassword)
    .then(([result]) => {
      console.info(result);
      res
        .status(200)
        .json({ Message: "Utilisateur crée avec succès", Nom: firstname });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controller",
        Erreur: "Erreur lors de l'enregistrement de l'utilisateur",
        Raison: err.sqlMessage,
      });
    });
};
const updateCandidate = (req, res) => {
  const { id } = req.params;
  console.info("ID qui est dans mes params :", id);
  const { firstname, lastname, email, hashedPassword } = req.body;
  console.info("FirstName :", firstname);
  console.info("LastName :", lastname);
  console.info("Email :", email);
  console.info("hashedPassword :", hashedPassword);

  models.candidate
    .update(firstname, lastname, email, hashedPassword, id)
    .then(([result]) => {
      console.info(result);
      res
        .status(200)
        .json({
          Message: "L'utilisateur a été modifié avec succès",
        })
        .catch((err) => {
          console.info(err);
          res.status(500).json({
            Message: "Erreur lors de la modification",
          });
        });
    });
};

module.exports = { getAllCandidates, postCandidate, updateCandidate };
