const userService = require("../services/user.service");
const { userValidationSchema } = require("../validations/user/create_user.validation");
const {
  updateUserSchema,
} = require("../validations/user/update_user.validation");
const { handleValidation }  = require('../core/helpers/handle_validation');


exports.getAll = (req, res) => {
  userService.getAll()
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.createUser = async (req, res) => {

  const validation = await handleValidation(userValidationSchema,req.body);

  if(validation.error.length)
    return res.status(400).send({ success: false, message: validation.error });

  userService.createUser(res.idUser, validation.value)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.updateUser = async(req, res) => {

  const validation = await handleValidation(updateUserSchema,req.body);
  if (validation.error.length) 
    return res.status(400).send({ success: false, message: validation.error });
  const { id } = req.params;

  userService.updateUser(id, value)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.removeUser = (req, res) => {

  const { id } = req.params;

  userService.removeUser(id)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.login = (req, res) => {

  const { email, password } = req.body;

  userService.login(email, password)
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};
