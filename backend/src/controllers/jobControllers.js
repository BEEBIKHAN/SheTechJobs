const job = (req, res) => {
  res.status(200).json({
    id: "1",
    name: "Développeuse Full Stack",
  });
};

module.exports = {
  job,
};
