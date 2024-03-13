const express = require("express");
const controller = require("../Controllers/CustomerController");
const { VerifyTokenMiddleware } = require("../auth/auth");
const router = express.Router();

router.get("/customers", VerifyTokenMiddleware, controller.GetCustomers);
router.get("/customers/:id", controller.GetCustomer);
router.post("/customers", controller.AddCustomer);
router.delete("/customers/:id", controller.DeleteCustomer);
router.put("/customers/:id", controller.UpdateCustomer);

module.exports = router;
