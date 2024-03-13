import express from "express";
import { GetContacts, GetContact, AddContact, UpdateContact, DeleteContact} from "../controllers/controller.js";
import VerifyTokenMiddleware from "../auth/auth.js";
const router = express.Router();

router.get("/contacts" , GetContacts);
router.get("/contacts/:id", VerifyTokenMiddleware, GetContact);
router.post("/contacts", VerifyTokenMiddleware, AddContact);
router.delete("/contacts/:id", VerifyTokenMiddleware, DeleteContact);
router.put("/contacts/:id", VerifyTokenMiddleware, UpdateContact);

export default router;