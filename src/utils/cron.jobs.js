import cron from "cron";
import User from "../models/user.model.js";

export const deleteExpiredOTPs = new cron.CronJob("0 */6 * * *", async () => {
  await User.updateMany({}, { $pull: { otp: { expires: { $lt: new Date() } } } });
});

deleteExpiredOTPs.start();