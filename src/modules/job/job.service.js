import Job from "../../models/job.model.js";

export const addJob = async (req, res, next) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const { jobId } = req.params;
    const job = await Job.findByIdAndUpdate(jobId, req.body, { new: true });
    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const { jobId } = req.params;
    await Job.findByIdAndDelete(jobId);
    res.status(200).json({ message: "Job deleted" });
  } catch (error) {
    next(error);
  }
};

export const getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};