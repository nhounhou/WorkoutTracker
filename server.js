const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "Workout";
// const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);
let mongoose = require("mongoose");
let db = require("./models");

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

  
require("./public/routes/html")(app);
require("./public/routes/api")(app);
  
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
  