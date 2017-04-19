var exports = module.exports = {}
var app = require('./index.js');
var db = app.get('db');


exports.create_product = function (req, res, next) {
  db.create_product([req.body.name, req.body.desc, Number(req.body.price), req.body.image],function (err, response) {
    if (!err) {
      res.status(200).send("good to go!");
    }
  });
};

exports.read_products = function (req, res, next) {
  db.read_products(function (err, products) {
    if (!err) {
      res.status(200).send({products: products})
    }
  });
}

exports.read_product = function (req, res, next) {
  db.read_product([req.params.id], function (err, products) {
    if (!err) {
      res.status(200).send({products: products})
    }
  });
}

exports.update_product = function (req, res, next) {
  db.update_product([Number(req.params.id), req.body.desc],function (err, response) {
    if (!err) {
      res.status(200).send("good to go!");
    }
  });
}

exports.delete_product = function (req, res, next) {
  db.delete_product([Number(req.params.id)],function (err, response) {
    if (!err) {
      res.status(200).send("good to go!");
    }
  });
}
