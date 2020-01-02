const router = require("express").Router();
let Post = require("../models/posts.model");
import passport from "../auth";

//Get
router.route("/").get((req, res) => {
  Post.find() //get list of posts from db promise function
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json("Error:" + err));
});

//Add
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const upvotes = 0;
    const title = req.body.title;
    const artist = req.body.artist;
    const link = req.body.link;

    const newPost = new Post({
      upvotes,
      title,
      artist,
      link
    });

    newPost
      .save()
      .then(() => res.json("Post Added"))
      .catch(err => res.status(400).json("Error:" + err));
  }
);

//Find
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json("Error:" + err));
});

//Delete
router.delete("/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted"))
    .catch(err => res.status(400).json("Error:" + err));
});

//update upvotes
router.put("/upvote", (req, res) => {
  Post.findOneAndUpdate(
    { title: req.body.title },
    {
      $set: { upvotes: req.body.upvotes + 1 }
    },
    { useFindAndModify: false, upsert: false }, //upsert will nto create a new one if it cannot find.

    err => {
      if (err) {
        res.send(err).end("Shit1");
      } else {
        res.status(200).end("Shit");
      }
    }
  );
});

module.exports = router;
