import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("movieprofiledb", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const profile = sequelize.define("profiles", {
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // imagename: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
});

(async () => {
  await sequelize.sync();
})();

export default profile;