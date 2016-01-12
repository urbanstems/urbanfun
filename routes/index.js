var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Products = mongoose.model('Products');

router.get('/api/products', function(req, res) {
  var zipcode = req.query.zipcode;
  Products.find({zipavailable: zipcode}, function(err, products){
    res.send(products);
  });
});

router.get('/form', function(req, res) {
  res.render('form');
});

router.get('/', function(req, res) {
  res.render('index', { title: 'UrbanFun'});
});

module.exports = router;
