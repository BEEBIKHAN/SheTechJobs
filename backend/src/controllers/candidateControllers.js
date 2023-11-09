const candidate = (req, res) => {
  res.status(200).json({
    id: "1",
    lastname: "Wildeuse",
    firstname: "Jane",
    email: "jane@gmail.com",
    password: "jane321",
    cv_link: "jane-wildeuse.cv",
  });
};

module.exports = {
  candidate,
};
