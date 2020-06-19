const { hash } = require("bcryptjs");
const { sign } = require("../core/helpers/login/jwt.helper");
const { MyError } = require("../core/helpers/handleError/myError");
const userRepository = require("../repositories/user.repository");
const { LoginResponse } = require('../models/response/user/login.response');
const loginResponse = require("../models/response/user/login.response");

exports.getAll = () => {
  return userRepository.getAll();
};

exports.geBytId = (_id) => {
  return userRepository.getById(_id);
};

exports.createUser = async (userViewModel) => {
  const { password } = userViewModel;
  userViewModel.password = await hash(password, 8);
  return userRepository.createUser(userViewModel);
};

exports.updateUser = async (userViewModel) => {
  const user = await userRepository.updateUser(userViewModel);
  if (!user) throw new MyError("CAN_NOT_FIND_USER", 404);
  return user;
};

exports.deleteUser = async (_id) => {
  const user = await userRepository.removeUser(_id);
  if (!user) throw new MyError("CAN_NOT_FIND_USER", 404);
  return user;
};

exports.login = async (email, password) => {
  const login = await userRepository.login(email, password);
  if (!login) throw new MyError("USER_INFO_INVALID", 400);
  let user = new LoginResponse(login);
  user.token = await sign({_id : user._id.toString()});
  return user;
};
