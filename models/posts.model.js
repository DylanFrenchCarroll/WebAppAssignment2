const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    upvotes: {
        type: Number
    },
    title: {
        type: String
    },
    artist:{
        type: String
    },
    link:{
        type: String
    },
},{
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;