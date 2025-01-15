const express = require("express");
const db = require("../database/db.js");

const router = express.Router();

router.post("/signup", (request, response) => {
  const sql = "insert into users(`name`, `email`, `password`) values (?)";
  const values = [
    request.body.userName,
    request.body.email,
    request.body.password,
  ];
  db.query(sql, [values], (error, data) => {
    if (error) {
      console.log(`error while inserting: ${error.message}`);
      return response.status(500).json({
        message: "Error while registering user",
        "error Message": error.message,
      });
    } else {
      console.log("user registered successfully");
      return response
        .status(201)
        .json({ message: "User registered successfully" });
    }
  });
});

router.get("/users", (request, response) => {
  const sql = "select * from users";
  db.query(sql, (error, data) => {
    if (error) {
      console.log(error.message);
      return response.status(500).json({
        message: error,
      });
    }
    return response.status(200).json(data);
  });
});

router.post("/login", (req, res) => {
  const sql = "Select name from users where email=? and password=?";
  const { email, password } = req.body;
  db.query(sql, [email, password], (error, data) => {
    if (error) {
      return res.status(500).json({
        error,
      });
    }
    if (data.length > 0) {
      return res
        .status(200)
        .json({ message: "user login success", data, userFound: true });
    }
    return res
      .status(401)
      .json({ message: "user does not exist", data, userFound: false });
  });
});

module.exports = router;
