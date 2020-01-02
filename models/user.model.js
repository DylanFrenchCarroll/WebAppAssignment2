const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim:true,
        minlength: 2,
    }, 
    password: {
        type: String
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports= User;