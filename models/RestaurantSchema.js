const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    cuisine: {type: String, required: true},
    rating: {type: Number},
    menu: [{
        name:{type: String, required: true},
        description:{type: String},
        price:{type: Number, required: true},
    }]
});

const Restaurant= new mongoose.model("Restaurant", RestaurantSchema)

module.exports = Restaurant;