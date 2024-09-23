let mongoose = require("mongoose");



mongoose.connect("mongodb+srv://kumardivyarithika:jaidivi@cluster0.meh9l.mongodb.net/Movie-website")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`,
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });