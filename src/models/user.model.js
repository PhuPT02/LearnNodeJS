const mongoose = require("mongoose");
const { date } = require("@hapi/joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
  phone: { type: String, require: true, trim: true, unique: true },
  email: { type: String, require: true, trim: true, unique: true },
  is_delete: { type: Boolean, default: false, trim: true },
  last_login: { type: Date, trim: true },
  is_admin: { type: Boolean, default: false, trim: true },
  created_by: { type: String, required: true, trim: true, default: date.UTC },
  created_at: { type: Date, required: true, trim: true },
  update_at: { type: Date, trim: true },
});

const User = mongoose.model("user", userSchema);
module.exports = { User };
