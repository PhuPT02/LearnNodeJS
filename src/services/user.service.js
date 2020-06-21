const { hash,compare } = require("bcryptjs");
const { sign } = require("../core/helpers/login/jwt.helper");
const { MyError } = require("../core/helpers/handleError/myError");
const userRepository = require("../repositories/user.repository");



exports.getAll = async () => {
  return userRepository.getAll().select("_id name email phone");
};

exports.geBytId = (id) => {
  return userRepository.getById(id).select("_id name email phone");
};

exports.createUser = async (user) => {
  const { password } = user;
  user.password = await hash(password, 8);
  return userRepository.createUser(user);
};

exports.updateUser = async (user) => {
  const record = await userRepository.updateUser(user);
  if (!record) throw new MyError("CAN_NOT_FIND_USER", 404);
  return record;
};

exports.deleteUser = async (id) => {
  const user = await userRepository.removeUser(id);
  if (!user) throw new MyError("CAN_NOT_FIND_USER", 404);
  return user;
};

exports.login = async (email, password) => {

  const user = await userRepository.findOne({email});
  if(!user) throw new MyError("Can not find user",404);

  const comparePassword = await compare(password,user.password);
  if(!comparePassword) throw new MyError('User invalid',400);
  
  const token = await sign({_id : newUser._id.toString()});

};


