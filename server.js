const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
    );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connected succesfully");
})

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log (`server started on port ${port}`));

app.get('/api/posts',  (req,res) => {
    

    const posts = [
        {
        "id": 1,
        "title": "Why You Can No Longer Get Lost in the Crowd",
        "link": "https://www.nytimes.com/2019/04/17/opinion/data-privacy.html",
        "artist": "Woodrow Hartzog",
        "comments": [],
        "upvotes": 10
    },
    {
        "id": 2,
        "title": "Samsung's folding phone breaks for reviewers",
        "link": "https://www.bbc.com/news/technology-47970788",
        "artist": "Dave Lee",
        "comments": [],
        "upvotes": 14
    },
    {
        "id": 3,
        "title": "Microsoft turned down facial-recognition sales on human rights concerns",
        "link": null,
        "artist": "Joseph Mennn",
        "comments": [],
        "upvotes": 12
    },
    {
        "id": 4,
        "title":"Follow-up: I found two identical packs of Skittles, among 468 packs with a total of 27,740 Skittles",
        "link": "https://possiblywrong.wordpress.com/",
        "artist": "unknown",
        "comments": [],
        "upvotes": 2
    },
    {
        "id": 5,
        "title": "THE COMING DESERT",
        "link": "https://newleftreview.org/issues/II97/articles/mike-davis-the-coming-desert",
        "artist": "MIKE DAVIS",
        "comments": [],
        "upvotes": 8
    },
    {
        "id": 6,
        "title": "Sleep myths 'damaging your health'",
        "link": "https://www.bbc.com/news/health-47937405",
        "artist": "James Gallagher",
        "comments": [],
        "upvotes": 10
    },
    {
        "id": 7,
        "title": "Planet’s ocean-plastics problem detailed in 60-year data set",
        "link": "https://www.nature.com/articles/d41586-019-01252-0",
        "artist": "Matthew Warren",
        "comments": [],
        "upvotes": 20
    }
    ];
    res.json(posts);
} );