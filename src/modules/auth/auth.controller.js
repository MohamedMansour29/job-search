import express from "express";
import { register, confirmOTP, login } from "./auth.service.js";
import { validateRegister, validateLogin } from "../../middlewares/validation.middleware.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/confirm-otp", confirmOTP);
router.post("/login", validateLogin, login);

export default router;