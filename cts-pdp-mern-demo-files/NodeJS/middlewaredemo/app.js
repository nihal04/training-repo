const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const logger = (req, res, next) => {
  //   console.log(`${req.method} request made to url - ${req.url} from ${req.ip}`);
  fs.writeFile(
    path.join(__dirname, "logs", "logs.log"),
    `${req.method} request made to url - ${req.url} from ${req.ip}`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

app.listen(9000, () => {
  console.log("Server running");
});
