import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cv: { url: String, id: String },
  status: { type: String, enum: ["pending", "accepted", "viewed", "consider", "rejected"], default: "pending" },
});

export default mongoose.model("Application", applicationSchema);