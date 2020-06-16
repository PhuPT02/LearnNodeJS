const { User } = require('../models/user.model');
const { MyError } = require('../helpers/handleError/myError')

exports.getAll = () => {
    try {
        return User.find({});
    } catch (error) {
        throw new MyError(error.message, 500);
    }
}
