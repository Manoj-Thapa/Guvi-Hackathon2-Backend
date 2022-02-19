const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  photo: String,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
