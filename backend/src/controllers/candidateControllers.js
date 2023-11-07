const candidate = (req, res) => {
  res.status(200).json({
    id: "1",
    nom: "Wildeuse",
    prenom: "Jane",
    image_profil:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/330px-Rihanna_Fenty_2018.png",
    adresse: "36 Rue des Wildeuse",
    code_postale: "75020",
    ville: "Paris",
    email: "jane@gmail.com",
    telephone: "06 66 77 88 99",
  });
};

module.exports = {
  candidate,
};
