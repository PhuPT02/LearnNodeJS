const { sign, verify } = require("jsonwebtoken");
const {
  SECRET_KEY,
  EXPRESSED,
  ALGORITHM,
} = require("../../Constant/jwt.constant");

exports.sign = async (input) => {
  return new Promise((resolve, reject) => {
    sign(
      input,
      SECRET_KEY,
      { expiresIn: EXPRESSED, algorithm: ALGORITHM },
      (error, token) => {
        resolve(token);
      }
    );
  });
};

exports.verify = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (error, obj) => {
      resolve(obj);
    });
  });
};
