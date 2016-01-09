var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Products = mongoose.model('Products');

router.get('/api/products', function(req, res) {
  var zipcode = req.query.zipcode;
  console.log('ZIPCODE', zipcode);
  Products.find(function(err, products){
    res.send(products);
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'UrbanFun'});
});

module.exports = router; 
