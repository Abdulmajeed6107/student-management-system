const mongoose = require('mongoose');

// defining the schema for student collection in mongoDB 

const studentSchema = new mongoose.Schema({
    // here we define all the column names 
    name: {
        type: String,
        required: [true, 'student name is required'],
        trim: true,
        minLength: [3, 'name contains least 2 characters long'],
        maxLenth: [40, 'name should not be more than 40 characters'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: true,
        lowercase: true,
    },
    course: {
        type: String,
        required: [true, 'course is required'],
        enum: {
            values: ['Mern stack', 'React', 'AI', 'Web', 'Graphic'],
            message: 'we are only offering these courses: Mern stack, React, AI, Web, Graphic ',
        },
    },
        marks: {
            type: Number,
            required: true,
            min: 0,
            max: 200,
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        }

    
});
module.exports = mongoose.model("student", studentSchema);