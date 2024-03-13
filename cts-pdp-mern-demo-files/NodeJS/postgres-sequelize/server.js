import express from "express";
import { Sequelize } from "sequelize";
import product from "./models/Product.js";
const app = express();

app.use(express.json());

const sequelize = new Sequelize("productsdb", "postgres", "niit1234", {
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

app.post("/products", async (req, res) => {
  let prd = new product({
    name: req.body.name,
    brand: req.body.brand,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  await prd.save();
  res.status(201).send("Product created successfully");
});

app.get("/products", async (req, res) => {
  let data = await product.findAll();
  res.status(200).send(data);
});

app.get("/products/:id", async (req, res) => {
  let data = await product.findByPk(req.params.id);
  res.status(200).send(data);
});

app.put("/products/:id", async (req, res) => {
  let data = await product.findByPk(req.params.id);
  if (data == null) {
    res.status(404).send("Product does not exists");
  } else {
    let { name, brand, quantity, price } = req.body;
    data.name = name;
    data.brand = brand;
    data.quantity = quantity;
    data.price = price;
    await data.save();
    res.status(200).send("Product updated successfully");
  }
});

app.delete("/products/:id", async (req, res) => {
  let data = await product.findByPk(req.params.id);
  if (data == null) {
    res.status(404).send("Product does not exists");
  } else {
    await data.destroy();
    res.status(200).send("Product deleted successfully");
  }
});

app.listen(9000, () => {
  console.log("Server running at port 9000");
});

