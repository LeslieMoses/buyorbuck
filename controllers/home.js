module.exports = {

    renderHome: function(req, res) {
        res.render('index', {});
    },

    renderLogin: function(req, res) {
        res.render('login', {});
    },

    renderUpload: function(req, res) {
        res.render('upload', {});
    },

    renderDesigners: function(req, res) {
        res.render('designers', {});
    },

    // leslie added this pg 05-18
     renderDesignerProfile: function(req, res) {
        res.render('designerProfile', {});
    },

    renderSignUp: function(req, res) {
        res.render('signup', {});
    },

    renderMaleClothing: function(req, res) {
        res.render('maleclothing', {});
    },

    renderFemaleClothing: function(req, res) {
        res.render('femaleclothing', {});
    },

    renderChildrensClothing: function(req, res) {
        res.render('childrensclothing', {});
    },

    renderProfile: function(req, res) {
        res.render('profile', {});
    },

    renderFavorites: function(req, res) {
        res.render('favorites', {});
    },

};
