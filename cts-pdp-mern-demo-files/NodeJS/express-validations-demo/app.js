const express = require("express");
const { query, body, validationResult } = require("express-validator");
const app = express();

app.use(express.json());

app.get("/", query("name").notEmpty(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    res.send(`Hello ${req.query.name}`);
  } else {
    res.send({ errors: result.array() });
  }
});

app.post(
  "/add",
  body("email").notEmpty().isEmail(),
  body("age").notEmpty().isNumeric(),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      res.send(`Posted Successfully`);
    } else {
      res.send({ errors: result.array() });
    }
  }
);

app.post("/user", query("name").notEmpty().escape(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    res.send(`Hello ${req.query.name}`);
  } else {
    res.send({ errors: result.array() });
  }
});

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});

// XSS - Cross Site Scripting
