import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) throw new Error("No token");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    throw new Error("Invalid token");
  }
};

export const authorize = (roles) => (req, res, next) => {
  const user = req.user;
  if (!roles.includes(user.role)) throw new Error("Unauthorized");
  next();
};