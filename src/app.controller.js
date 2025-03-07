import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import connectDB from "./db/db.connection.js";
import authRouter from "./modules/auth/auth.controller.js";
import userRouter from "./modules/user/user.controller.js";
import companyRouter from "./modules/company/company.controller.js";
import jobRouter from "./modules/job/job.controller.js";
import applicationRouter from "./modules/application/application.controller.js";
import chatRouter from "./modules/chat/chat.controller.js";
import messageRouter from "./modules/message/message.controller.js"; // Added
import adminRouter from "./modules/admin/admin.controller.js";
import { notFound, globalError } from "./utils/errors/index.js";
import { typeDefs, resolvers } from "./graphql/schema.js";

const bootstrap = async (app, express) => {
  app.use(helmet());
  app.use(cors({ origin: process.env.CLIENT_URL }));
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  app.use(express.json());
  await connectDB();

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/company", companyRouter);
  app.use("/job", jobRouter);
  app.use("/application", applicationRouter);
  app.use("/chat", chatRouter);
  app.use("/message", messageRouter); // Added
  app.use("/admin", adminRouter);

  app.all("*", notFound);
  app.use(globalError);
};

export default bootstrap;