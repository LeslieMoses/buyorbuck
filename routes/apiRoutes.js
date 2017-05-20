// *********************************************************************************
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var testApiController = require('../controllers/testApi');
var Sequelize = require('sequelize');

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

    // GET route for getting all of the current products
    app.get("/api/currentproducts", function(req, res) {
        db.CurrentProduct.findAll({
            order: [
                [Sequelize.fn('RAND')]
            ]
        }).then(function(dbCurrentProduct) {
            res.json(dbCurrentProduct);
        });
    });

    // POST route for saving product
    app.post("/api/products", function(req, res) {
        db.Products.create({
                type: req.body.type,
                color: req.body.color,
                style: req.body.style,
                price: req.body.price
            }).then(function(dbProducts) {
                res.json(dbProducts);
            })
            .catch(function(error) {
                console.log(error.message);
                res.status(500).json({ error: error.message });
            });
    });

    // POST route for saving a new designer
    app.post("/api/designer", function(req, res) {
        db.Designers.create(req.body).then(function(dbDesigners) {
            res.json(dbDesigners);
        });
    });

};
