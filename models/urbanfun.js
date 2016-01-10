var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productsSchema = new Schema({
  _id: Number,
  name: String,
  price: Number,
  zipavailable: [Number]
});

var Products = mongoose.model('Products', productsSchema);
