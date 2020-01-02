"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var router = require("express").Router();

var User = require("../models/user.model");

router.route("/").get(function (req, res) {
  User.find() //get list of users from db promise function
  .then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
});
router.route("/add").post(function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var newUser = new User({
    username: username,
    password: password
  });
  newUser.save().then(function () {
    return res.json("User added");
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
});
router.post("/login",
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var username, password, user, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = req.body.username;
            password = req.body.password;
            _context.prev = 2;
            _context.next = 5;
            return User.findOne({
              username: username,
              password: password
            });

          case 5:
            user = _context.sent;
            token = _jsonwebtoken["default"].sign(user.username, process.env.secret);
            res.status(200).json({
              token: "Bearer " + token
            });
            console.log("Logged In");
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            console.log("Error,wrong pw or name");
            res.send(_context.t0).end();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;