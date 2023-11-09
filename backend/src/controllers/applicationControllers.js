const application = (req, res) => {
  res.status(200).json({
    id: "1",
    date: "09/11/2023",
    status: "0",
    condidate_id: "1",
    offer_id: "1",
  });
};

module.exports = {
  application,
};
