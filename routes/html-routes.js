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
        console.log("made it to HTML route");
        if (req.user) {
            console.log("REQ USER ID", req.user.id)
            res.redirect(`/profile/${req.user.id}`);
        }
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    //sign up page
    app.get("/signup", function(req, res) {
        if (req.user) {
            console.log(req.user.id)
            res.redirect(`/profile/${req.user.id}`);
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    //swipe page
    app.get("/swipe",
        function(req, res) {
            db.User.findAll().then(function(data) {
                console.log("data", data);
                const profiles = [];
                for (let i = 0; i < data.length; i++) {
                    const userData = data[i].dataValues;
                    profiles.push(userData);
                }
                res.render('swipe', {
                    profiles
                })
            })
        });

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