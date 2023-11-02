const localisation = (req, res) => {
  res.status(200).json({
    id: "1",
    nom_departement: "Paris",
  });
};

module.exports = {
  localisation,
};
