import express from "express";
import { sendMessage, getChat } from "./chat.service.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validateSendMessage } from "../../middlewares/validation.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", validateSendMessage, sendMessage);
router.get("/:sender/:receiver", getChat);

export default router;