import Joi from "joi";

export const validateRegister = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) throw new Error(error.details[0].message);
  next();
};

export const validateLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) throw new Error(error.details[0].message);
  next();
};

export const validateSendMessage = (req, res, next) => {
  const schema = Joi.object({
    sender: Joi.string().required(),
    receiver: Joi.string().required(),
    content: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) throw new Error(error.details[0].message);
  next();
};