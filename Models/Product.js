const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  photo: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
