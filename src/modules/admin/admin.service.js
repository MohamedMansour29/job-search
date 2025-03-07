import User from "../../models/user.model.js";
import Company from "../../models/company.model.js";

export const banUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(userId, { bannedAt: new Date() }, { new: true });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const unbanUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndUpdate(userId, { bannedAt: null }, { new: true });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const banCompany = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findByIdAndUpdate(companyId, { bannedAt: new Date() }, { new: true });
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};

export const unbanCompany = async (req, res, next) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findByIdAndUpdate(companyId, { bannedAt: null }, { new: true });
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};