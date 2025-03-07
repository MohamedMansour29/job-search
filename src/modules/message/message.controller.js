import express from "express";
import { sendMessage, getMessages, markAsRead } from "./message.service.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validateSendMessage } from "../../middlewares/validation.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/send", validateSendMessage, sendMessage);
router.get("/:sender/:receiver", getMessages);
router.put("/:messageId/read", markAsRead);

export default router;