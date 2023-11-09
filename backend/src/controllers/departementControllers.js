const departement = (req, res) => {
  res.status(200).json({
    id: "1",
    name: "Paris",
  });
};

module.exports = {
  departement,
};
