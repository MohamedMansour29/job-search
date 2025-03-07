export const notFound = (req, res, next) => {
  res.status(404).json({ message: "Not Found" });
};

export const globalError = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
};