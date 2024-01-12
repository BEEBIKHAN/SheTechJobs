const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const getAdmin = (req, res) => {
  models.admin
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postAdmin = (req, res) => {
  const { email, hashedPassword } = req.body;

  models.admin
    .insert(email, hashedPassword)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ Message: "Admin créé avec succès", Email: email });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Source: "controller",
        Erreur: "Erreur lors de l'enregistrement de l'admin",
        Raison: err.sqlMessage,
      });
    });
};

const verifyPassword = (req, res) => {
  argon2.verify(req.admin.password, req.body.password).then((isVerified) => {
    if (isVerified) {
      const payload = {
        sub: req.admin.id,
        email: req.admin.email,
        role: req.admin.role,
        id: req.admin.id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.cookie("authToken", token);

      res.status(200).json({
        message: "Connexion réussie",
        id: req.admin.id,
        email: req.admin.email,
        role: "admin",
      });
    } else {
      res.sendStatus(401);
    }
  });
};

module.exports = {
  postAdmin,
  getAdmin,
  verifyPassword,
};
