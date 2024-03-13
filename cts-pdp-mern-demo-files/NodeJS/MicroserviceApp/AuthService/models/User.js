import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize('postgres://superadmin:oAU18kEFANfBBcxFnn2ncUjMZrSSV5WD@dpg-cnbjrdla73kc73fi3pp0-a.oregon-postgres.render.com/authdb_bnqh');

// const sequelize = new Sequelize(
//   process.env.DB_RENDER_NAME,
//   process.env.DB_RENDER_USERNAME,
//   process.env.DB_RENDER_PASSWORD,
//   {
//     host: process.env.DB_RENDER_HOSTNAME,
//     dialect: "postgres",
//   }
// );

const User = sequelize.define("users", {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
});

(async () => {
  await sequelize.sync();
})();

export default User;
