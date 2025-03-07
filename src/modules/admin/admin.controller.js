import express from "express";
import { banUser, unbanUser, banCompany, unbanCompany } from "./admin.service.js";
import { authenticate, authorize } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);
router.use(authorize(["admin"]));

router.put("/users/:userId/ban", banUser);
router.put("/users/:userId/unban", unbanUser);
router.put("/companies/:companyId/ban", banCompany);
router.put("/companies/:companyId/unban", unbanCompany);

export default router;