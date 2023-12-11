const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const getAllCompanies = (req, res) => {
  models.company
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postCompany = (req, res) => {
  console.info("C'est ici qu'on va créer une entreprise");
  const { companyName, email, hashedPassword, siret } = req.body;

  models.company
    .insert(companyName, email, hashedPassword, siret)
    .then(([result]) => {
      console.info(result);
      res
        .status(200)
        .json({ Message: "Entreprise inscrite avec succès", Nom: companyName });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controller",
        Erreur: "Erreur lors de l'inscription de l'entreprise",
        Raison: err.sqlMessage,
      });
    });
};

const updateCompany = (req, res) => {
  const { id } = req.params;
  console.info("ID qui est dans mes params :", id);
  const { companyName, email, hashedPassword, siret } = req.body;
  console.info("companyName :", companyName);
  console.info("Email :", email);
  console.info("hashedPassword :", hashedPassword);
  console.info("siret :", siret);

  models.company
    .update(companyName, email, hashedPassword, siret, id)
    .then(([result]) => {
      console.info(result);
      res
        .status(200)
        .json({
          Message: "L'entreprise a été modifiée avec succès",
        })
        .catch((err) => {
          console.info(err);
          res.status(500).json({
            Message: "Erreur lors de la modification",
          });
        });
    });
};

const verifyPassword = (req, res) => {
  // console.info("req.company depuis le controller : ", req.company.password);
  // console.info("req.body.password : ", req.body.password);
  argon2.verify(req.company.password, req.body.password).then((isVerified) => {
    if (isVerified) {
      const payload = {
        sub: req.company.id,
        email: req.company.email,
        role: req.company.role,
        id: req.company.id,
        companyName: req.company.name,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.cookie("authToken: ", token);

      res.status(200).json({
        message: "Connexion réussie",
        id: req.company.id,
        email: req.company.email,
        role: "company",
        siret: req.company.siret,
        companyName: req.company.name,
      });
    } else {
      res.sendStatus(401);
    }
  });
};
const getListApplicationsByOffer = (req, res) => {
  console.info("applications by offer route ");
  models.company
    .findListApplicationsByOffer(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
        console.info("my query is passed");
      } else {
        res.send(rows);
        console.info("Unfornately query isn't passed");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500).send("Erreur lors du chargemernt de la candidature");
    });
};

module.exports = {
  getAllCompanies,
  postCompany,
  updateCompany,
  verifyPassword,
  getListApplicationsByOffer,
};
