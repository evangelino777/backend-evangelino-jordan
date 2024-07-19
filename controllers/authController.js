const { generateToken } = require("../utils/jwtUtils");

const getToken = (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
};

module.exports = { getToken };
