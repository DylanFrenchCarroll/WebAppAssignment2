"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 2
  },
  password: {
    type: String
  }
}, {
  timestamps: true
});
var User = mongoose.model('User', userSchema);
module.exports = User;