// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/auth");

module.exports = function(app) {
  console.log("IT GETS IT");
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  app.post("/api/signin", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/profile", passport.authenticate("local"), function(req, res) {
    console.log("PLEASE WORK", req.user);
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  app.post("/api/signup", function(req, res) {
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
        console.log("USER ID", response.dataValues);
        // res.end();
        res.json(response.dataValues);
        // res.redirect(`/profile/${response.dataValues.id}`);
        // res.redirect(307, `/api/profile/${response.dataValues.id}`);
        // res.send(response.dataValues.id)
      })
      .catch(function(err) {
        res.status(401).json(err);
        console.log(err);
        `  `;
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  //route for finding one user based off id
  app.get("/profile/:id", function(req, res) {
    console.log("PARAMS -----", req.params.id);
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });
};
