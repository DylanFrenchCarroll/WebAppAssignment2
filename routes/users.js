const router = require("express").Router();
let User = require("../models/user.model");
import jwt from "jsonwebtoken";

router.route("/").get((req, res) => {
  User.find() //get list of users from db promise function
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    let user = await User.findOne({
      username: username,
      password: password
    });
    let token = jwt.sign(user.username, process.env.secret);
    res.status(200).json({ token: "Bearer " + token });
    console.log("Logged In")
  } 
  
  
  
  catch (err) {
    console.log("Error,wrong pw or name");
    res.send(err).end();
  }
});

module.exports = router;
