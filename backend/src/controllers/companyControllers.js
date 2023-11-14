const models = require("../models");

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

module.exports = {
  postCompany,
};
