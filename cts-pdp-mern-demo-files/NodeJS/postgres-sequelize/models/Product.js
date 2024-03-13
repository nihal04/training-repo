import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("productsdb", "postgres", "niit1234", {
  host: "localhost",
  dialect: "postgres",
});

const product = sequelize.define("products", {
  productid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync();
})();

export default product;