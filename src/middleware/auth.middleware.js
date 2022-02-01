const jwt = require("jsonwebtoken");

exports.authorize = async (req, res, next) => {
  console.log(req.headers.authorization);
};
