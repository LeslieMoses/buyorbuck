// *********************************************************************************
// htmlRoutes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var homeController = require('../controllers/home');
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    app.get('/', homeController.renderHome);

    app.get('/index', homeController.renderHome);

    app.get('/login', homeController.renderLogin);

    app.get('/upload', homeController.renderUpload);

    app.get('/designers', homeController.renderDesigners);

    // leslie added this pg 05-18
    app.get('/designerProfile', homeController.renderDesignerProfile);
    
    app.get('/signup', homeController.renderSignUp);

    app.get('/maleclothing', homeController.renderMaleClothing);

    app.get('/femaleclothing', homeController.renderFemaleClothing);

    app.get('/childrensclothing', homeController.renderChildrensClothing);

    app.get('/profile', homeController.renderProfile);

    app.get('/favorites', homeController.renderFavorites);

};
