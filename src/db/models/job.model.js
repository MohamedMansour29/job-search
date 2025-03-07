import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, enum: ["onsite", "remote", "hybrid"], required: true },
  type: { type: String, enum: ["part-time", "full-time"], required: true },
  level: { type: String, enum: ["fresh", "junior", "mid", "senior", "lead", "cto"], required: true },
  description: { type: String, required: true },
  techSkills: [{ type: String }],
  softSkills: [{ type: String }],
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isClosed: { type: Boolean, default: false },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
});

export default mongoose.model("Job", jobSchema);