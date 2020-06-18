const { sign, verify } = require("jsonwebtoken");
const { SECRET_KEY } = require("../../Constant/jwt.constant");

exports.sign = async (inputSign) => {
  return sign(inputSign, SECRET_KEY);
};

exports.verify = async (token) => {
  return verify(token, SECRET_KEY);
};
