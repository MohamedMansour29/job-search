import express from "express";
import { addCompany, updateCompany, deleteCompany, getCompanyJobs } from "./company.service.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { validateAddCompany } from "../../middlewares/validation.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/", validateAddCompany, addCompany);
router.put("/:companyId", updateCompany);
router.delete("/:companyId", deleteCompany);
router.get("/:companyId/jobs", getCompanyJobs);

export default router;