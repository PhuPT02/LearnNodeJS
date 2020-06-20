const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    phone: { type: String, require: true, trim: true },
    email: {type: String, require: true, trim: true},
    user: {type: String,require: true,trim: true},
    password: {type: String, require: true, trim: true, select: false}
});

const User = mongoose.model('user',userSchema);
module.exports = { User };