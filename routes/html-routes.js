// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require('../models');
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/auth");

module.exports = function(app) {

    //home page
    app.get("/", function(req, res) {
        // If the user already has an account send them to their profile page
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/signin", function(req, res) {
        console.log("16", req.user)
            // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect('/profile/:id');
        }
        //otherwise send them to the signin page
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    app.get("/signup", function(req, res) {
        // If the user has an account send them to the login page
        if (req.user) {
            console.log("SIGNIN ROUTE", req.user)

            res.redirect('/profile/:id');
        }
        //otherwise send them to the profile page
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/swipe", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/swipe.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/profile/:id", function(req, res) {
        console.log("HTML PARAMS", req.params.id)
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.sendFile(path.join(__dirname, "../public/profile.html"));
        })
    });

};