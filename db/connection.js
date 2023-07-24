//import mongoose
const mongoose = require('mongoose');

//To access connection string from .env file
const db = process.env.DATABASE

mongoose.connect(db,{
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(()=>{
    console.log('Data connection established');
}).catch((error)=>{
    console.log(error);
})