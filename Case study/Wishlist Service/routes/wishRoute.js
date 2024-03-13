import express from "express";
import { AddWishlist, UpdateWishlist, GetAllWishlist } from "../controllers/wishController.js";
import VerifyTokenMiddleware from "../auth/wishlistAuth.js";
const router = express.Router();

router.get("/movie/:id", VerifyTokenMiddleware, GetAllWishlist);
router.post("/movie/:id", VerifyTokenMiddleware, AddWishlist);
router.put("/movie/:id", VerifyTokenMiddleware, UpdateWishlist);

export default router;