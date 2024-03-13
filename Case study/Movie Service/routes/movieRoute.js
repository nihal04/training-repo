import express from "express";
import { GetMovie, GetMovies } from "../controllers/movieController.js";
import VerifyTokenMiddleware from "../auth/movieAuth.js";
const router = express.Router();

router.get("/list" , VerifyTokenMiddleware, GetMovies);
router.get("/list/:id", VerifyTokenMiddleware, GetMovie);

export default router;