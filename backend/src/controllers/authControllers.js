const logout = (req, res) => {
  res.clearCookie("authToken").sendStatus(200);
};

module.exports = {
  logout,
};
