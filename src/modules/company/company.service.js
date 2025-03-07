import Company from "../../models/company.model.js";
import { uploadFile, deleteFile } from "../../utils/cloudinary.js";

export const addCompany = async (req, res, next) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    next(error);
  }
};

export const updateCompany = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findByIdAndUpdate(companyId, req.body, { new: true });
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};

export const deleteCompany = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findByIdAndUpdate(companyId, { deletedAt: new Date() }, { new: true });
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};

export const getCompanyJobs = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId).populate("jobs");
    res.status(200).json(company.jobs);
  } catch (error) {
    next(error);
  }
};