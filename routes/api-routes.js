// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
var isAuthenticated = require('../config/middleware/auth');
var upload = require("../services/image-upload");

module.exports = function(app) {
    //SIGNIN
    app.get('/signin', function(req, res) {
        db.User.findOne({
            where: {
                id: req.user.dataValues.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post('/api/signin', passport.authenticate('local'), function(req, res) {
        console.log(req.user.dataValues.id);
        if (req.user) {
            res.json(req.user);
        } else {
            res.status(401).json(err);
        }
    });

    app.post('/api/profile', passport.authenticate('local'), function(req, res) {
        res.json(req.user);
    });

    app.post('/api/signup', function(req, res) {
        var location = upload(req.body.uploadedImage);
        db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                fandoms: req.body.fandoms,
                relationship: req.body.relationship,
                dadJoke: req.body.dadJoke,
                cosplay: req.body.cosplay,
                gif: req.body.gif,
                userImage: location
            })
            .then(function(response) {
                console.log('USER ID', response.dataValues.id);
                res.json(response.dataValues);
            })
            .catch(function(err) {
                res.status(401).json(err);
                console.log(err);
            });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/signin', function(req, res) {
        db.User.findOne({
            where: {
                id: req.user.dataValues.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get('/api/profile/:id', function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get('/api/swipe', function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
};