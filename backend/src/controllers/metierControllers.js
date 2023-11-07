const metier = (req, res) => {
  res.status(200).json({
    id: "1",
    nom_du_métier: "Développeuse Full Stack",
  });
};

module.exports = {
  metier,
};
