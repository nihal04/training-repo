import express from "express";
import { Register, Update, upload, UploadImage, GetUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/register", Register);
router.put("/updateuser", Update);
router.get("/user/:id", GetUser);
//router.post("/upload", upload.single("profilepic"), UploadImage);

export default router ;