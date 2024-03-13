import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import ConsulConfiguration from "./consul-config.js";
import "dotenv/config";
import routes from "./routes/wishRoute.js";
import cors from "cors";

const app = express();
ConsulConfiguration(app);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/wishlist", routes);

mongoose.connect("mongodb://localhost:27017/MovieWishlistDB");
mongoose.connection
  .once("open", () => {
    console.log("Connected to mongodb");
  })
  .on("error", (err) => {
    console.log(err);
  });

app.listen(process.env.HOST_PORT, () => {
  console.log(`Server running on port ${process.env.HOST_PORT}`);
});