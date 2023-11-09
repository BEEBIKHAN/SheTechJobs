const models = require("../models");

const postEntreprise = (req, res) => {
  console.info("C'est ici qu'on va créer une entreprise");
  const {
    companyName,
    logo,
    siret,
    address,
    postcode,
    city,
    email,
    phoneNumber,
    password,
    companyDescription,
    adminClientId,
  } = req.body;

  models.entreprise
    .insert(
      companyName,
      logo,
      siret,
      address,
      postcode,
      city,
      email,
      phoneNumber,
      password,
      companyDescription,
      adminClientId
    )
    .then(([result]) => {
      console.info(result);
      res
        .status(200)
        .json({ Message: "Entreprise inscrite avec succès", Nom: companyName });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        Erreur: "Erreur lors de l'inscription de l'entreprise",
        Raison: err.sqlMessage,
      });
    });
};

// const entreprise = (req, res) => {
//   res.status(200).json({
//     id: "1",
//     nom: "WildCodeSchool",
//     logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/WildCodeSchool_logo_pink_background_400x220.png/210px-WildCodeSchool_logo_pink_background_400x220.png",
//     siret: "794 926 063 00247",
//     adresse: "44 Rue Alphonse Penaud",
//     code_postale: "75020",
//     ville: "Paris",
//     email: "wildcodeschool@gmail.com",
//     telephone: "09 78 45 04 38",
//   });
// };

module.exports = {
  postEntreprise,
};
