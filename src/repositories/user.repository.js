const { User } = require("../models/user.model");

exports.getAll = () => {
  return User.find({ is_delete: false });
};

exports.getById = (id) => {
  const options = {
    _id: id,
    is_delete: false,
  };
  return User.findById(options);
};

exports.createUser = (user) => {
  const record = new User(user);
  return record.save();
};

exports.updateUser = (id, user) => {
  return User.findByIdAndUpdate(id, user, { new: true });
};

exports.removeUser = (id) => {
  return User.findByIdAndRemove(id);
};

exports.findOne = (condition) => {
  return User.findOne(condition);
};
