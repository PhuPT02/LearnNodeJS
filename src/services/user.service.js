const { hash, compare } = require("bcryptjs");
const { sign } = require("../core/helpers/jwt.helper");
const userRepository = require("../repositories/user.repository");
const messageService = require('./message.service');
const { HandleError } = require("../core/helpers/handleError.helper");
const { checkObjectId } = require("../core/helpers/checkObjectId.helper");


exports.getAll = async () => {
  return userRepository.getAll().select("_id name email phone");
};

exports.geBytId = (id) => {
  return userRepository.getById(id).select("_id name email phone");
};

exports.createUser = async (idUser, user) => {

  const { password, email, phone } = user;

  const checkMail = await userRepository.findOne({ email });
  if (checkMail) {
    const getMessage = await messageService.getByKey('email_exist');
    throw new HandleError(getMessage.message, getMessage.status);
  }

  const checkPhone = await userRepository.findOne({ phone });
  if (checkPhone) {
    const getMessage = await messageService.getByKey('phone_exist');
    throw new HandleError(getMessage.message, getMessage.status);
  }

  user.password = await hash(password, 8);
  user.created_at = new Date();
  user.created_by = idUser;

  const record = await userRepository.createUser(user);

  return {
    _id: record._id,
    name: record.name,
    phone: record.phone,
    email: record.email,
  };
};

exports.updateUser = async (id, user) => {

  checkObjectId(id);
  user.update_at = new Date();

  const record = await userRepository.updateUser(id, user);
  if (!record) {
    const getMessage = await messageService.getByKey('can_not_find_user');
    throw new HandleError(getMessage.message, getMessage.status);
  }

  return {
    _id: record._id,
    name: record.name,
    phone: record.phone,
    email: record.email,
  };
};

exports.removeUser = async (id) => {

  checkObjectId(id);

  const record = await userRepository.updateUser(id, { is_delete: true });
  if (!record) {
    const getMessage = await messageService.getByKey('can_not_find_user');
    throw new HandleError(getMessage.message, getMessage.status);
  }

  return {
    _id: record._id,
    name: record.name,
    phone: record.phone,
    email: record.email,
  };
};

exports.login = async (email, password) => {

  const user = await userRepository.findOne({ email });
  if (!user) {
    const getMessage = await messageService.getByKey('can_not_find_user');
    throw new HandleError(getMessage.message, getMessage.status);
  }

  const comparePassword = await compare(password, user.password);
  if (!comparePassword) {
    const getMessage = await messageService.getByKey('user_invalid');
    throw new HandleError(getMessage.message, getMessage.status);
  }

  userRepository.updateUser(user._id, { last_login: new Date() });
  const token = await sign({ id: user._id.toString() });

  return {
    _id: user._id,
    name: user.name,
    phone: user.phone,
    email: user.email,
    token: token,
  };
};
