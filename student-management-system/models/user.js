const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [2, 'name must at least 2 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'password must at least 6 characters long'],
        select: false

    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default:'user'
    },
} , {timestamps:true}
)
module.exports= mongoose.module('User', UserSchema)