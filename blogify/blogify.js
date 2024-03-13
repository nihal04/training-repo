import express from "express";
import routes from "./routes/route.js";
import mongoose from "mongoose";
import logger from "morgan";
import UserModel from "./models/UserModel.js";
import blogModel from "./models/blogModel.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/", routes);

mongoose.connect("mongodb://localhost:27017/BlogDB");
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
