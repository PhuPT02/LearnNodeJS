const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name : { type: String, trim: true, unique: true }
});

const Role = mongoose.model('role',roleSchema);

module.exports = { Role };