var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: String,
  description: String,
  Rating: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
