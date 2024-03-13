import express from "express";
import { Register, Login, GetBlogs, AddBlog, DeleteBlog, UpdateBlog } from "../controllers/blogController.js";
import VerifyTokenMiddleware from "../auth/authVerify.js";
const router = express.Router();

router.post("/blog/login", Login);
router.post("/blog/register", Register);
router.post("/blog", VerifyTokenMiddleware, AddBlog);
router.get("/blog", VerifyTokenMiddleware, GetBlogs);
router.delete("/blog/:id", VerifyTokenMiddleware, DeleteBlog);
router.put("/blog/:id", VerifyTokenMiddleware, UpdateBlog);

export default router ;