const express = require("express");
const routes = require("./routes/route");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/api", routes);

mongoose.connect("mongodb://localhost:27017/CustomersDB");
mongoose.connection
  .once("open", () => {
    console.log("Connected to mongodb");
  })
  .on("error", (err) => {
    console.log(err);
  });


const port = 8000 || process.env.port;

app.listen(port, () => {
  console.log("Server is running...");
});