const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const User = require("./routes/users");
const app = express();

// TODO: evaluate using hyphen in place of underscore

function loadMiddleWares(app, express) {
  app.use(
    session({
      secret: "ssdn",
      resave: false,
      saveUninitialized: true
    })
  );

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.json());
  app.use(bodyParser.raw());

  const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).send();
  };
  app.post("/api/signUp", User);
  app.post("/api/login", User);
  app.get("/api/user", User);
  app.get("/api/logout", isAuthenticated, User);
}

module.exports = loadMiddleWares;
