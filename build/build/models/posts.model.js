"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var postSchema = new Schema({
  upvotes: {
    type: Number
  },
  title: {
    type: String
  },
  artist: {
    type: String
  },
  link: {
    type: String
  }
}, {
  timestamps: true
});
var Post = mongoose.model('Post', postSchema);
module.exports = Post;