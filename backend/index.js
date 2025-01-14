const express = require("express");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const userSignup = require("./controllers/controllers.js");
const db = require("./database/db.js");

const app = express();
app.use(cors());

const PORT = 6969;

app.use(express.json());

db.connect((error) => {
  if (error) {
    console.log("error in data base connection");
  } else {
    console.log("database connected successfully");
  }
});

app.use("/auth", userSignup);

app.listen(PORT, () => {
  console.log("server is running");
});
