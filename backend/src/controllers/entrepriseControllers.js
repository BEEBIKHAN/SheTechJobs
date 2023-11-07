const entreprise = (req, res) => {
  res.status(200).json({
    id: "1",
    nom: "WildCodeSchool",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/WildCodeSchool_logo_pink_background_400x220.png/210px-WildCodeSchool_logo_pink_background_400x220.png",
    siret: "794 926 063 00247",
    adresse: "44 Rue Alphonse Penaud",
    code_postale: "75020",
    ville: "Paris",
    email: "wildcodeschool@gmail.com",
    telephone: "09 78 45 04 38",
  });
};

module.exports = {
  entreprise,
};
