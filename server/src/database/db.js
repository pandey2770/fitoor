const mongooes = require("mongoose");

mongooes.connect("mongodb://localhost/fitoor");

mongooes.connection
  .once("open", function() {
    console.log("bol jai kara bol mere shri gurumaharaj ki jai");
  })
  .on("error", function(error) {
    console.log("Swamiji kripa kro", error);
  });
