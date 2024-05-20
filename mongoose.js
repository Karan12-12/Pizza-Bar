const mongoose = require("mongoose");
require("dotenv").config();

var mongoURL = process.env.MONGO_CONNECTION_URL;

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo db is successfully connected");
});
db.on("error", () => {
  console.log("Mongo db connection failed");
});

module.exports = mongoose;
