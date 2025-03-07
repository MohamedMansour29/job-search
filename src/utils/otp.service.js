import bcrypt from "bcrypt";
import { sendEmail } from "./email.service.js";

export const sendOTP = async (email, type) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const hashedCode = await bcrypt.hash(code, 10);
  const expires = new Date(Date.now() + 10 * 60 * 1000);
  await sendEmail(email, "OTP Code", `Your OTP code is ${code}`);
  return { code: hashedCode, type, expires };
};