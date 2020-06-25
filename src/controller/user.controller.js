const userService = require("../services/user.service");
const { userValidation } = require("../validations/user/user.validation");
const {
  updateUserValidation,
} = require("../validations/user/updateUser.validation");

exports.getAll = (req, res) => {
  userService
    .getAll()
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.createUser = async (req, res) => {
  const { error, value } = await userValidation(req.body);
  if (error) return res.status(400).send({ success: false, message: error });

  userService
    .createUser(value)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { error, value } = updateUserValidation(req.body);
  if (error) return res.status(400).send({ success: false, message: error });

  userService
    .updateUser(id, value)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.removeUser = (req, res) => {
  const { id } = req.params;
  userService
    .removeUser(id)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userService
    .login(email, password)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};
