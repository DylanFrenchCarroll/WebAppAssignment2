const router = require('express').Router();
let Post = require('../models/posts.model');


//Get 
router.route('/').get((req,res) => {
    Post.find() //get list of posts from db promise function
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error:' + err));
});

//Add
router.route('/add').post((req,res) => {
    const title = req.body.title;
    const artist = req.body.artist;
    const link = req.body.link;
  
    const newPost = new Post({
        title,
        artist, 
        link,
    });

    newPost.save()
    .then(() => res.json('Post Added'))
    .catch(err => res.status(400).json('Error:' + err));
});

//Find
router.route('/:id').get((req,res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error:' + err));
});

//Delete
router.route('/:id').delete((req,res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted"))
    .catch(err => res.status(400).json('Error:' + err));
});


module.exports = router; 