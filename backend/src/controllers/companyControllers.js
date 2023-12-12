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

const UpdateEmailCompany = (req, res) => {
  // const id = parseInt(req.params.id, 10);
  const { id } = req.params;
  const { email } = req.body;
  console.info("Req.body de l'update email :", req.body);
  models.company
    .updateEmail(email, id)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({
        Message: "L'email de l'entreprise a été modifié avec succès",
      });
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ Message: "Erreur lors de la modification de l'email" });
    });
};

const UpdatePasswordCompany = (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  console.info("Req.body du mot de passe :", req.body);
  models.company
    .updatePassword(password, id)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({
        Message: "Le mot de passe de l'entreprise a été modifié avec succès",
      });
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ Message: "Erreur lors de la modification du mot de passe" });
    });
};

const destroyCompany = (req, res) => {
  const { id } = req.params;

  models.company.delete(id).then(([result]) => {
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).send("Entreprise supprimée avec succès");
    }
  });
};
module.exports = {
  getAllCompanies,
  postCompany,
  updateCompany,
  verifyPassword,
  UpdateEmailCompany,
  UpdatePasswordCompany,
  destroyCompany,
};
