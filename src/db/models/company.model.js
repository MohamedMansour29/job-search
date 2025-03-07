import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  industry: { type: String, required: true },
  address: { type: String, required: true },
  employeeCount: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  logo: { url: String, id: String },
  coverPic: { url: String, id: String },
  HRs: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  bannedAt: { type: Date },
  deletedAt: { type: Date },
  legalDoc: { url: String, id: String },
  isApproved: { type: Boolean, default: false },
});

companySchema.pre("remove", async function (next) {
  await this.model("Job").deleteMany({ companyId: this._id });
  next();
});

export default mongoose.model("Company", companySchema);