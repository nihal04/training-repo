const express = require("express");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

const app = express();
app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.listen(8000, () => {
  console.log("Server is running");
});
