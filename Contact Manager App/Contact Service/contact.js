import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import ConsulConfiguration from "./consul-config.js";
import "dotenv/config";
import routes from "./routes/route.js";
import cors from "cors";

const app = express();
ConsulConfiguration(app);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/", routes);

mongoose.connect("mongodb://localhost:27017/ContactsDatabase");
mongoose.connection
  .once("open", () => {
    console.log("Connected to mongodb");
  })
  .on("error", (err) => {
    console.log(err);
  });

// const port = 3000 || process.env.port;

app.listen(process.env.HOST_PORT, () => {
  console.log(`Server running on port ${process.env.HOST_PORT}`);
});
