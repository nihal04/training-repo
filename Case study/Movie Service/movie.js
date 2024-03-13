import express from "express";
import logger from "morgan";
import ConsulConfiguration from "./consul-config.js";
import "dotenv/config";
import routes from "./routes/movieRoute.js";
import cors from "cors";

const app = express();
ConsulConfiguration(app);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/movielist", routes);


app.listen(process.env.HOST_PORT, () => {
  console.log(`Server running on port ${process.env.HOST_PORT}`);
});
