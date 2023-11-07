const typeDeContrat = (req, res) => {
  res.status(200).json({
    id: "1",
    type_de_contrat: "CDD",
    durée: "9 mois",
  });
};

module.exports = {
  typeDeContrat,
};
