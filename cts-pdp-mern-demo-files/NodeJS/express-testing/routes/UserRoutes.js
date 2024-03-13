import express from "express";
import { Register } from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", Register);

export default router;

