import express from "express";
import { Login, isAuthenticated } from "../controllers/authController.js";
import VerifyTokenMiddleware from "../authVerify/authVerify.js";
const router = express.Router();

router.post("/login", Login);
router.post("/isAuthenticated", VerifyTokenMiddleware, isAuthenticated);

export default router ;