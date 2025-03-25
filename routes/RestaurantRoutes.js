const express = require("express");
const Restaurant = require("../models/RestaurantSchema");

const router = express.Router();

// Create a new restaurant
router.post("/", async (req, res) => {
  try {
    const { name, location, cuisine, rating, menu } = req.body;

    if (!name || !location || !cuisine || !rating || !menu) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const restaurant = new Restaurant({ name, location, cuisine, rating, menu });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a restaurant by ID
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error:"something went wrong" });
  }
});

// Update a restaurant
router.put("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error:"something went wrong"  });
  }
});

// Delete a restaurant
router.delete("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({error:"something went wrong"  });
  }
});

module.exports = router;
