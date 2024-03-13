import express from "express";
import router from "./routes/User.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/AuthDB");
mongoose.connection.once("open", (err) => {
  if (!err) {
    console.log("Connected to database");
  }
});

app.use("/api", router);

app.listen(9000, () => {
  console.log("Server is running");
});
