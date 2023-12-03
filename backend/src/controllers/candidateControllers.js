const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
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
        .json({ Message: "Utilisatrice crée avec succès", Nom: firstname });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controller",
        Erreur: "Erreur lors de l'enregistrement de l'utilisatrice",
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

const sendCv = (req, res) => {
  const { id } = req.body;
  const cv = req.file.filename;
  console.info(cv);
  models.candidate
    .addCv(cv, id)
    .then(() => {
      res.status(200).send("Fichier téléchargé");
    })
    .catch((error) => {
      console.error("Error adding CV:", error);
      res.status(500).send("Internal Server Error");
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.candidate.hashedPassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = {
          sub: req.candidate.id,
          email: req.candidate.email,
          role: req.candidate.role,
          id: req.candidate.id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("authToken", token);

        res.status(200).json({
          message: "Connexion réussie",
          id: req.candidate.id,
          email: req.candidate.email,
          role: "candidate",
          firstname: req.candidate.firstname,
          lastname: req.candidate.lastname,
        });
      } else {
        res.sendStatus(401);
      }
    });
};

module.exports = {
  getAllCandidates,
  postCandidate,
  updateCandidate,
  verifyPassword,
  sendCv,
};
