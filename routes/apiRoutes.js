// *********************************************************************************
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var testApiController = require('../controllers/testApi');

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for testing	
  app.get('/test', testApiController.index);

  // GET route for getting all of the designers
  app.get("/api/designers", function(req, res) {
    db.Designers.findAll({}).then(function(dbDesigners) {
      res.json(dbDesigners);
    });
  });

  // GET route for getting all of the current Products
  app.get("/api/currentproducts", function(req, res) {
    db.CurrentProduct.findAll({}).then(function(dbCurrentProduct) {
      res.json(dbCurrentProduct);
    });
  });

    // GET route for getting all of the current Products
  app.get("/api/products", function(req, res) {
    var query = {};
    db.Product.findAll({
      where: query
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // POST route for saving a new post
  app.post("/api/designer", function(req, res) {
    db.Designer.create(req.body).then(function(dbPost) {
      res.json(dbDesigner);
    });
  });

};
