import User from "../../models/user.model.js";
import { uploadFile, deleteFile } from "../../utils/cloudinary.js";

export const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updates = req.body;
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const uploadProfilePic = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const file = req.file;
    const result = await uploadFile(file);
    const user = await User.findByIdAndUpdate(userId, { profilePic: result }, { new: true });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteProfilePic = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    await deleteFile(user.profilePic.id);
    user.profilePic = undefined;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};