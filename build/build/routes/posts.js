"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _auth = _interopRequireDefault(require("../auth"));

var router = require("express").Router();

var Post = require("../models/posts.model"); //Get


router.route("/").get(function (req, res) {
  Post.find() //get list of posts from db promise function
  .then(function (posts) {
    return res.json(posts);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
}); //Add

router.post("/add", _auth["default"].authenticate("jwt", {
  session: false
}), function (req, res) {
  var upvotes = 0;
  var title = req.body.title;
  var artist = req.body.artist;
  var link = req.body.link;
  var newPost = new Post({
    upvotes: upvotes,
    title: title,
    artist: artist,
    link: link
  });
  newPost.save().then(function () {
    return res.json("Post Added");
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
}); //Find

router.get("/:id", function (req, res) {
  Post.findById(req.params.id).then(function (post) {
    return res.json(post);
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
}); //Delete

router["delete"]("/:id", function (req, res) {
  Post.findByIdAndDelete(req.params.id).then(function () {
    return res.json("deleted");
  })["catch"](function (err) {
    return res.status(400).json("Error:" + err);
  });
}); //update upvotes

router.put("/upvote", function (req, res) {
  Post.findOneAndUpdate({
    title: req.body.title
  }, {
    $set: {
      upvotes: req.body.upvotes + 1
    }
  }, {
    useFindAndModify: false,
    upsert: false
  }, //upsert will nto create a new one if it cannot find.
  function (err) {
    if (err) {
      res.send(err).end("Shit1");
    } else {
      res.status(200).end("Shit");
    }
  });
});
module.exports = router;