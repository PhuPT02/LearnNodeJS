const { date, required } = require("@hapi/joi");
const { hash, compare } = require("bcryptjs");
const { sign } = require("../core/helpers/login/jwt.helper");
const userRepository = require("../repositories/user.repository");
const { MyError } = require("../core/helpers/handleError/myError");
const { checkObjectId } = require('../core/helpers/handleError/checkObjectId');

exports.getAll = async () => {
  return userRepository.getAll().select("_id name email phone");
};

exports.geBytId = (id) => {
  return userRepository.getById(id).select("_id name email phone");
};

exports.createUser = async (user) => {

  const email = await userRepository.findOne({ email: user.email });
  if (email) throw new MyError("Email existed", 400);
  const phone = await userRepository.findOne({ phone: user.phone });
  if (phone) throw new MyError("Phone existed", 400);

  const { password } = user;

  user.password = await hash(password, 8);
  user.created_at = new Date();
  user.created_by = "boss phu";

  const record = await userRepository.createUser(user);

  return {
    _id: record._id,
    name: record.name,
    phone: record.phone,
    email: record.phone,
  };
};

exports.updateUser = async (user) => {

  checkObjectId(user._id);

  user.update_at = new Date();
  const record = await userRepository.updateUser(user);
  if (!record) throw new MyError("Can not find user", 404);

  return record;
};

exports.deleteUser = async (id) => {
  const user = await userRepository.removeUser(id);
  if (!user) throw new MyError("Can not find user", 404);
  return user;
};

exports.login = async (email, password) => {

  const user = await userRepository.findOne({ email });
  if (!user) throw new MyError("Can not find user", 404);

  const comparePassword = await compare(password, user.password);
  if (!comparePassword) throw new MyError("User invalid", 400);

  userRepository.updateUser(user._id,{  })

  const token = await sign({ _id: user._id.toString() });
  return {
    _id: user._id,
    name: user.name,
    phone: user.phone,
    email: user.email,
    token: token,
  };
};
