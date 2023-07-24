//Automatically loads .env file in tomour application 
require('dotenv').config()

//Import express 
const express = require ('express')

//import cors
const cors = require('cors')

//import connection.js
require("./db/connection")

//import routes
const router = require('./routes/router')

//Create an app using express
const server = express()

//Define port number 
const PORT = 5000

//use innserver app 
server.use(cors())
server.use(express.json())
server.use(router)

//Run application 
server.listen(PORT,()=>{
    console.log('listening on port' + PORT);
})

//routes - localhost:5000 - /
server.get('/',(req,res)=>{
    res.status(200).json("E Commerce server starts...")
})