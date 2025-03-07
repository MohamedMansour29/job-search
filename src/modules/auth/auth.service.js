import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";
import { sendOTP } from "../../utils/otp.service.js";

export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) throw new Error("Email exists");
    const otp = await sendOTP(email, "confirmEmail");
    const newUser = await User.create({ ...req.body, otp: [otp] });
    res.status(201).json({ message: "OTP sent", userId: newUser._id });
  } catch (error) {
    next(error);
  }
};

export const confirmOTP = async (req, res, next) => {
  try {
    const { userId, code } = req.body;
    const user = await User.findById(userId);
    const otp = user.otp.find((o) => o.type === "confirmEmail" && o.expires > new Date());
    if (!otp || !(await bcrypt.compare(code, otp.code))) throw new Error("Invalid OTP");
    user.isConfirmed = true;
    await user.save();
    res.status(200).json({ message: "Email confirmed" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) throw new Error("Invalid credentials");
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};