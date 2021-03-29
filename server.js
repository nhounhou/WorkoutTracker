const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "Workouts";
const collections = ["daily"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

  
require("./public/routes/api")(app);
require("./public/routes/html")(app);

  
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
  