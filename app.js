var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  return res.render('index', {
    title: 'UrbanStems - New City',
    message: 'Hello there!',
    // products: productsArray
  });
});

app.get('/api/products', function(req, res){
  // put in data here to return all products
});

app.listen(3000);
