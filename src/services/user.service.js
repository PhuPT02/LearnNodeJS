const { User } = require('../models/user.model');
const { MyError } = require('../helpers/handleError/myError')

exports.getAll = () => {
    try {
        return User.find({});
    } catch (error) {
        throw new MyError(error.message, 500);
    }
}

exports.getId = (id) => {
    try {
        return User.findById(id);
    } catch (error) {
        throw new MyError(error.message, 500);
    }
}

exports.createUser = async (userView) => {
    try {
        const user = new User(userView);
        const insertUser = await user.save();
        return insertUser;
    } catch (error) {
        throw new MyError(error.message, 500);
    }
}

exports.updateUser = async (userView) => {
    try {
        const user = await User.findByIdAndUpdate(userView._id, userView);
        if (!user)
            throw new MyError('CAN_NOT_FIND_USER',404);
        return user;
    } catch (error) {
        throw new MyError(error.message, 500);
    }
}

exports.deleteUser = async (_id) => {
    try {
        const user = await User.findByIdAndDelete(_id);
        if (!user)
            throw new MyError('CAN_NOT_FIND_USER',404);
        return user;
    } catch (error) {
        throw new MyError(error.message, 500);
    }
}