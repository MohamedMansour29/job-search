import Application from "../../models/application.model.js";

export const apply = async (req, res, next) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (error) {
    next(error);
  }
};

export const getApplications = async (req, res, next) => {
  try {
    const { jobId } = req.params;
    const applications = await Application.find({ jobId }).populate("userId");
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};

export const updateApplication = async (req, res, next) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;
    const application = await Application.findByIdAndUpdate(applicationId, { status }, { new: true });
    res.status(200).json(application);
  } catch (error) {
    next(error);
  }
};