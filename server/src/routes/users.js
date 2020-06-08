const express = require("express");
var passport = require("passport");
const route = express.Router();
var createUser = require("../database/usersDb");
const { cryptPassword, comparePassword } = require("../password");

require("../auth.js");

route.post("/api/signUp", async (req, res) => {
  var data = new createUser({
    email: req.body.userData.email,
    password: await cryptPassword(req.body.userData.password),
    createdOn: new Date()
  });
  data.save().then(function(data, err) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.json({ sucess: true, data: "User Created" });
    }
  });
});

route.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

route.get("/api/user", (req, res) => {
  res.json(req.user);
});

module.exports = route;
