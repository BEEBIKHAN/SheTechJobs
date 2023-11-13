const typeDeContrat = (req, res) => {
  res.status(200).json({
    id: "1",
    type: "CDI",
  });
};

module.exports = {
  typeDeContrat,
};
