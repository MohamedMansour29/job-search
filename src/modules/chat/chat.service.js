import Chat from "../../models/chat.model.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { sender, receiver, message } = req.body;
    let chat = await Chat.findOne({ sender, receiver });
    if (!chat) {
      chat = await Chat.create({ sender, receiver, messages: [] });
    }
    chat.messages.push({ message, sender });
    await chat.save();
    res.status(200).json(chat);
  } catch (error) {
    next(error);
  }
};

export const getChat = async (req, res, next) => {
  try {
    const { sender, receiver } = req.params;
    const chat = await Chat.findOne({ sender, receiver });
    res.status(200).json(chat);
  } catch (error) {
    next(error);
  }
};