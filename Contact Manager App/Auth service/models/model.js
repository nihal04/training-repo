import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("contactauthdb", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const contact = sequelize.define("contacts", {
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
});

(async () => {
  await sequelize.sync();
})();

export default contact;