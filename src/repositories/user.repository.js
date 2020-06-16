const { User } = require('../models/user.model');
exports.getAll = () => { 
    return User.find({});
}