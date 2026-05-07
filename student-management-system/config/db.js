// in this file we make mongodb connection 

const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
      //getting monogdb url from env file

      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log('mongodb connected successfully')
    }catch(error){
      
     console.log("error in connection to mongodb:", error);
    }
}

// export this file to server.js 
module.exports = connectDB;