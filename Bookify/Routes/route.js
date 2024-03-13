const express = require("express");
const controller = require("../Controllers/BookController");
const router = express.Router();
const { VerifyTokenMiddleware } = require("../auth/auth");

router.get("/books", VerifyTokenMiddleware, controller.GetBooks);
router.get("/books/:id", VerifyTokenMiddleware, controller.GetBook);
router.post("/books", VerifyTokenMiddleware, controller.AddBook);
router.delete("/books/:id", VerifyTokenMiddleware, controller.DeleteBook);
router.put("/books/:id", VerifyTokenMiddleware, controller.UpdateBook);
router.get("/register", controller.Register);

module.exports = router;