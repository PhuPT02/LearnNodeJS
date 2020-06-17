const { MyError } = require("../helpers/handleError/myError");
const { hash } = require("bcryptjs");
const userRepository = require("../repositories/user.repository");

exports.getAll = () => {
  try {
    return userRepository.getAll();
  } catch (error) {
    throw new MyError(error.message, 500);
  }
};

exports.geBytId = (_id) => {
  try {
    return userRepository.getById(_id);
  } catch (error) {
    throw new MyError(error.message, 500);
  }
};

exports.createUser = async (userViewModel) => {
  try {
    const { password } = userViewModel;
    userViewModel.password = await hash(password, 8);
    return userRepository.createUser(userViewModel);
  } catch (error) {
    throw new MyError(error.message, 500);
  }
};

exports.updateUser = async (userViewModel) => {
  try {
    const user = await userRepository.updateUser(userViewModel);
    if (!user) throw new MyError("CAN_NOT_FIND_USER", 404);
    return user;
  } catch (error) {
    throw new MyError(error.message, 500);
  }
};

exports.deleteUser = async (_id) => {
  try {
    const user = await userRepository.removeUser(_id);
    if (!user) throw new MyError("CAN_NOT_FIND_USER", 404);
    return user;
  } catch (error) {
    throw new MyError(error.message, 500);
  }
};

exports.login = async (email,password)=>{
    try{
        const login = userRepository.login(email,password);
        if(!login) throw new MyError('USER_INFO_INVALID',400);
        return login;
    }
    catch(error){
        throw new MyError(error.message, 500);
    }
    

}
