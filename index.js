import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import bootstrap from "./src/app.controller.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });
});

bootstrap(app, express);

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log("Connected successfully on port", port);
});