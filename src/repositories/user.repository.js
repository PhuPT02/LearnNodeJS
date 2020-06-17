const { User } = require("../models/user.model");
const { hash, compare } = require("bcryptjs");
const { MyError } = require("../helpers/handleError/myError");

exports.getAll = () => {
    return User.find({});
};

exports.getById = (id) => {
    return User.findById(id);
};

exports.createUser = (userViewModel) => {
    const user = new User(userViewModel);
    return user.save();
};

exports.updateUser = (_id, userViewModel) => {
    return User.findByIdAndUpdate(_id, userViewModel);
};

exports.removeUser = (_id) => {
    return User.findByIdAndRemove(_id);
};

exports.login = async (email, passowrd) => {
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) return;

    const comparePassword = await compare(passowrd, user.password);
    if (!comparePassword) return;
    
    return user;
};
