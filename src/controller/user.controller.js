const userService = require("../services/user.service");
const { userValidation } = require("../validations/user/user.validation");

exports.getAll = (req, res) => {
  userService
    .getAll()
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.createUser = (req, res) => {
  userValidation(req.body);

  userService
    .createUser(req.body)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.updateUser = (req, res) => {
  userValidation(req.body);
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  userService
    .login(email, password)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};
