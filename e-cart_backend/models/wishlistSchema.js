// import mongoose

const mongoose = require("mongoose");

// Define Schema

const wishlistSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

// create a model to store products
const wishlists = new mongoose.model("wishlists", wishlistSchema);

module.exports = wishlists;
