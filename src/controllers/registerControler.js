const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  photo: String,
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;