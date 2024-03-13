const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');
// app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.post("/create", (req, res) => {
  console.log(req.query);
  res.status(201).send({ status: 201, message: "Success" });
});

app.get("/home", (req, res) => {
    // Here is the code to get data from mongodb
  res.render("home", { name: "Dhiraj", hobbies: ['Gaming', 'Cooking', 'Traveling'] });
});

app.get("/aboutus", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
