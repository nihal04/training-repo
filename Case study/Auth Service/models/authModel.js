import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("movieauthdb", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const authuser = sequelize.define("authusers", {
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync();
})();

export default authuser;