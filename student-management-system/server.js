const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// import the database connection function from config/debugger.js file 
const connectDB = require('./config/db');

//importing the route file
const studentRoutes = require('./routes/studentroutes')

// load environment variables from .env file 
dotenv.config();

connectDB();

// create variable for using express pakage 
const app = express();



// now indicating the express server to use json format for sending and receiving data 
app.use(express.json());

// enable cors for all routes 
app.use(cors());

//router calling 
app.use('/api/students', studentRoutes);


// running nodejs on registered port
const PORT = process.env.PORT

// demo running of api 
app.get('/test', (req, res)=>{
     res.json('this is testing api');
});

app.listen(PORT, ()=>{
    console.log(`port is running on ${PORT}`)
})