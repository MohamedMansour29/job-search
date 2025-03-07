import express from "express";
import { apply, getApplications, updateApplication } from "./application.service.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", apply);
router.get("/:jobId", getApplications);
router.put("/:applicationId", updateApplication);

export default router;