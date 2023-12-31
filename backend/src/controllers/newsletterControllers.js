const models = require("../models");
const { sendMail } = require("../services/sendEmail");

const getUsers = (req, res) => {
  models.newsletter
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const registerUser = (req, res) => {
  const message = {
    email: req.body.email,
    subject: "Bienvenue chez Shetechjobs",
    text: "Bienvenue sur Shetechjobs !!!!",
    html: "<h1>Vous êtes au bon endroit !!!</h1><p>Votre talent au service de la tech !</p>",
  };

  models.newsletter
    .insert(message.email)
    .then(([result]) => {
      sendMail({ message });
      console.info(result);
      res.status(200).json({ message: "Email inscrit avec succes" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Erreur lors de l'enregistrement" });
    });
};

const sendNewsletter = (req, res) => {
  models.newsletter
    .findAll()
    .then(([subscribers]) => {
      subscribers.forEach((subscriber) => {
        const message = {
          email: subscriber.email,
          subject: req.body.subject,
          text: req.body.text,
          html: req.body.html,
        };
        sendMail({ message });
      });
      res.status(200).json({
        message: "email envoyé avec succès",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { getUsers, registerUser, sendNewsletter };
