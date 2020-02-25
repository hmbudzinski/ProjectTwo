// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
var isAuthenticated = require("../config/middleware/auth");

module.exports = function(app) {

    //POST FUNCTIONS 
    // app.post('/api/signin', passport.authenticate('local'), function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             email: req.body.email,
    //         }
    //     }).then(function(dbUser) {
    //         res.json(dbUser);
    //         // res.json(req.user);
    //     });
    // });

    app.get("/signin", function(req, res) {
        db.User.findOne({
            where: {
                id: req.user.dataValues.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/signin", passport.authenticate("local"), function(req, res) {
        console.log("api-routes call");
        console.log(req.user.dataValues.id)
        if (req.user) {
            // res.redirect(`/profile/${req.user.dataValues.id}`);
            res.json(req.user);
        } else {
            res.status(401).json(err);
        }
    });

    app.post('/api/profile', passport.authenticate('local'), function(req, res) {
        res.json(req.user);
    });

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
                console.log("USER ID", response.dataValues.id);
                // res.end();
                res.json(response.dataValues);
                // res.redirect(`/profile/${response.dataValues.id}`);
                // res.redirect(307, `/api/profile/${response.dataValues.id}`);
                // res.send(response.dataValues.id)
            })
            .catch(function(err) {
                res.status(401).json(err);
                console.log(err);
            });
    });

    //GET FUNCTIONS 
    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    //route for finding one user based off id 
    app.get("/profile/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
};