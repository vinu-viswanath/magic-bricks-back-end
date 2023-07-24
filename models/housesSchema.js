//import mongoose
const mongoose = require('mongoose');

//define schema for product collection to store data
const housesSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    quantity: {
        type: String,
        required: true,
    },

    place: {
        type: String,
        required: true,
    },

    rooms: {
        type: String,
        required: true,
    },

    price: {

        type: Number,
        required: true,
    },
})

//create a model to store houses
const houses = new mongoose.model('houses',housesSchema)

//export the model
module.exports = houses
