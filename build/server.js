"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _auth = _interopRequireDefault(require("./auth"));

require('dotenv').config();

var x = "x";
var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

var app = express();
var port = 5000;
app.use(_auth["default"].initialize());
app.use(cors());
app.use(express.json());
var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB connected succesfully");
});

var postsRouter = require('./routes/posts');

var usersRouter = require('./routes/users');

app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.listen(port, function () {
  return console.log("server started on port ".concat(port));
});