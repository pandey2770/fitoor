const mongooes = require("mongoose");
mongooes.connect("mongodb://localhost/fitoor");

mongooes.connection
  .once("open", function() {
    console.log("bol jai kara bol mere shri gurumaharaj ki jai");
  })
  .on("error", function(error) {
    console.log("Swamiji kripa kro", error);
  });

const Schema = mongooes.Schema;

const userDataSignUp = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    required: true
  }
});

const createUser = mongooes.model("createuser", userDataSignUp);

module.exports = createUser;
