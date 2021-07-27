const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User
