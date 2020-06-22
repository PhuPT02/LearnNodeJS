const userService = require("../services/user.service");
const Joi = require("@hapi/joi");
const { userValidation } = require("../validations/user/user.validation");
exports.getAll = (req, res, next) => {
  userService
    .getAll()
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.createUser = async (req, res, next) => {
  console.log(req.body)
  try {
    const value = await userValidation.validateAsync(req.body);
}
catch (err) { console.log(err) }

  // userService
  //   .createUser(req.body)
  //   .then((user) => res.send({ success: true, user }))
  //   .catch(res.onError);
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  userService
    .login(email, password)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};
