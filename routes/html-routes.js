var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/auth");

module.exports = function(app) {
    //home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //sign in page
    app.get("/signin", function(req, res) {
        // If the user has an account send them to the profile page
        console.log("made it to HTML route");
        if (req.user) {
            res.redirect(`/profile/${req.user.id}`);
        }
        //otherwise send them to the signin page
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    //sign up page
    app.get("/signup", function(req, res) {
        if (req.user) {
            res.redirect(`/profile/${req.user.id}`);
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    //swipe page
    app.get(
        "/swipe", //isAuthenticated,
        function(req, res) {
            res.render("swipe");
            res.sendFile(path.join(__dirname, "../views/swipe.handlebars"));
        }
    );

    //profile page
    app.get("/profile/:id", isAuthenticated, function(req, res) {
        console.log("HTML PARAMS", req.params.id);
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.sendFile(path.join(__dirname, "../public/profile.html"));
        });
    });
};