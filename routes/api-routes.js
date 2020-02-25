// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
var isAuthenticated = require('../config/middleware/auth');

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
        console.log('api-routes call');
        console.log(req.user.dataValues.id);
        if (req.user) {
            res.json(req.user);
        } else {
            $('.modal').open();
            res.status(401).json(err);
            //trying to add modal on incorrect submission
        }
    });

    //PROFILE
    app.get('/profile/:id', function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post('/api/profile', passport.authenticate('local'), function(req, res) {
        console.log('PLEASE WORK', req.user);
        res.json(req.user);
    });

    //SIGN UP
    app.post('/api/signup', function(req, res) {
        db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                fandoms: req.body.fandoms,
                relationship: req.body.relationship,
                dadJoke: req.body.dadJoke,
                cosplay: req.body.cosplay,
                gif: req.body.gif
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

    //LOGOUT
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    //route for finding one user based off id
    app.get('/api/profile/:id', function(req, res) {
        console.log('PARAMS', req.params.id);
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            console.log('dbUSer', dbUser);
            res.json(dbUser);
        });
    });
};