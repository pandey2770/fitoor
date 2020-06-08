var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var createUser = require("./database/usersDb.js");
const { comparePassword } = require("./password");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    createUser.findOne({ email: username }).then(function(result) {
      if (result) {
        comparePassword(password, result.password).then(function(
          resultPassword
        ) {
          if (resultPassword) {
            return done(null, result);
          } else {
            return done(null, { message: "bad password" });
          }
        });
      } else {
        return done(null, { message: "User Doses not exist" });
      }
    });
  })
);

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  createUser.findOne({ _id: id }).then(function(result) {
    if (result) {
      done(null, result);
    }
  });
});
