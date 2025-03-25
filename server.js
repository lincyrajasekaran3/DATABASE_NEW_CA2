require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Restaurant = require("./routes/RestaurantRoutes")

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('mongodb connected'))
.catch(err => console.error("Mongodb connection failed",err))
    
const PORT = process.env.PORT||4000;
app.listen(PORT, () => console.log(`Server is running on port`))