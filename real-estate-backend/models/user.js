const bcrypt = require("bcrypt");
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

userSchema.pre('save', async function (next) {
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;
