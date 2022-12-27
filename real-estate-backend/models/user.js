
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: [true, 'Email already exits'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'password must be at least 6 characters'],
        select: false,
    }
});

module.exports = 

