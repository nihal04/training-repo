const express = require("express");
const controller = require("../controllers/productController");
const router = express.Router();

router.get("/products", controller.GetProducts);
router.get("/products/:id", controller.GetProduct);
router.post("/products", controller.AddProduct);
router.delete("/products/:id", controller.DeleteProduct);
router.get('/productdetails', controller.GetProductDetails);

module.exports = router;
