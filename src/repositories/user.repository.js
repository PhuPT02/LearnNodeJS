const { User } = require("../models/user.model");

exports.getAll = () => {
  return User.find({});
};

exports.getById = (id) => {
  return User.findById(id);
};

exports.createUser = (user) => {
  const record = new User(user);
  return record.save();
};

exports.updateUser = (id, user) => {
  return User.findByIdAndUpdate(id, user);
};

exports.removeUser = (id) => {
  return User.findByIdAndRemove(id);
};

exports.findOne = (condition) => {
  return User.findOne(condition);
};

exports.updateLoginDate = (id) => {
  return User.findByIdAndUpdate({ _id: id }, { last_login: new Date() });
};