const userService = require("../services/user.service");
const { ABORT_EARLY } = require("../core/configuration/validation.config");
const { userValidation } = require("../validations/user/user.validation");

exports.getAll = (req, res, next) => {
  userService
    .getAll()
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.createUser = async (req, res, next) => {
  const { error } = userValidation.validate(req.body, ABORT_EARLY);

  if (error)
    return res.status(400).send({ success: false, message: error.details });

  userService
    .createUser(req.body)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  userService
    .login(email, password)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};
