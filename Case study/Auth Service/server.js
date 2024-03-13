import express from "express";
import routes from "./routes/authRoute.js";
import { Sequelize } from "sequelize";
import ConsulConfiguration from "./consul-config.js";
import "dotenv/config";
import cors from "cors";
const app = express();
ConsulConfiguration(app);
app.use(cors());
app.use(express.json());

app.use("/", routes);

const sequelize = new Sequelize("movieauthdb", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully");
  } catch (err) {
    console.log(err);
  }
})();

app.listen(process.env.HOST_PORT, () => {
  console.log(`Server is running on port: ${process.env.HOST_PORT}`);
});