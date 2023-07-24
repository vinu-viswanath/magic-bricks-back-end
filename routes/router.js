//Inside router.js file, import express
const express = require('express')

//import product controller
const housesController = require('../controllers/housesController')



//using express create an object for router class inorder to setup path
const router = new express.Router()

//Resolve client request in various server routes

//All api call will be resolved

//get all products
router.get('/products/all-products',housesController.getAllHouses)

//get particular house details
router.get('/products/viewproduct/:product_id',housesController.viewHouses)

//export router
module.exports = router


