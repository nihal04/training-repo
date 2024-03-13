const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./Routes/route");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/api", routes);

mongoose.connect("mongodb://localhost:27017/BooksDB");
mongoose.connection
  .once("open", () => {
    console.log("Connected to mongodb");
  })
  .on("error", (err) => {
    console.log(err);
  });

const port = 3000 || process.env.port;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
