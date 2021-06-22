var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: String,
  description: String,
  rating{
    type: String,
    min = 0,
    max = 5
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
