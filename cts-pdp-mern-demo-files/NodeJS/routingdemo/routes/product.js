const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Product Route");
});

router.get("/products", (req, res) => {
  res.send("This is get product route");
});

module.exports = router;
