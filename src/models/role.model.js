const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name : { type: String, trim: true, unique: true }
});

