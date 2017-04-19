var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config.js')
const port = 8080;


var app = module.exports = express();


app.use(bodyParser.json());


var conn = massive.connectSync({
  connectionString: config.connectionString
});
app.set('db', conn);
var db = app.get('db');



var productsCtrl = require('./productsCtrl.js');


app.post('/products', productsCtrl.create_product);
app.get('/products', productsCtrl.read_products);
app.get('/products/:id', productsCtrl.read_product)
app.put('/products/:id', productsCtrl.update_product);
app.delete('/products/:id', productsCtrl.delete_product);


app.listen( port, function () {
  console.log('listening......');
});
