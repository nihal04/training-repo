import express from "express";
import morgan from "morgan";
import { Sequelize } from "sequelize";
import routes from "./routes/index.js";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
const sequelize = new Sequelize(
  "postgres://superadmin:oAU18kEFANfBBcxFnn2ncUjMZrSSV5WD@dpg-cnbjrdla73kc73fi3pp0-a.oregon-postgres.render.com/authdb_bnqh"
);

// const sequelize = new Sequelize(
//   process.env.DB_RENDER_NAME,
//   process.env.DB_RENDER_USERNAME,
//   process.env.DB_RENDER_PASSWORD,
//   {
//     host: process.env.DB_RENDER_HOSTNAME,
//     dialect: "postgres",
//   }
// );

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to databse");
  } catch (err) {
    console.log(err);
  }
})();
app.use("/api", routes);

const port = 7000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
