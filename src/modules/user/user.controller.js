import express from "express";
import { updateUser, getUser, uploadProfilePic, deleteProfilePic } from "./user.service.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validateUpdateUser } from "../../middlewares/validation.middleware.js";

const router = express.Router();

router.use(authenticate);

router.put("/:userId", validateUpdateUser, updateUser);
router.get("/:userId", getUser);
router.post("/:userId/profile-pic", uploadProfilePic);
router.delete("/:userId/profile-pic", deleteProfilePic);

export default router;