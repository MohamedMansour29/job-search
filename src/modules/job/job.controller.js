import express from "express";
import { addJob, updateJob, deleteJob, getJobs } from "./job.service.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", addJob);
router.put("/:jobId", updateJob);
router.delete("/:jobId", deleteJob);
router.get("/", getJobs);

export default router;