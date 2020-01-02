require('dotenv').config();
const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
import passport from "./auth";




const app = express();
const port = process.env.PORT || 5000;

app.use(passport.initialize());
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

