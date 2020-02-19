// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/auth");

module.exports = function(app) {

    //home page
    app.get("/", function(req, res) {
        // If the user already has an account send them to their profile page
        if (req.user) {
            res.redirect("/profile/:id");
        }
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/signin", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/profile/:id");
        }
        //otherwise send them to the login page
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    app.get("/signup", function(req, res) {
        // If the user has an account send them to the login page
        if (req.user) {
            res.redirect("/signin");
        }
        //otherwise send them to the signup page
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/profile/:id", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"));
    });

};