const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  password: { type: String, require: true, trim: true },
  phone: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true, unique: true },
  is_delete: { type: Boolean, default: false, trim: true },
  last_login: { type: Date, default: Date.UTC, trim: true },
  is_admin: { type: Boolean, default: false, trim: true },
  created_by: { type: String, required: true, trim: true },
  created_at: { type: Date, required: true, trim: true },
  update_at: { type: Date, trim: true },
});

const User = mongoose.model("user", userSchema);
module.exports = { User };
