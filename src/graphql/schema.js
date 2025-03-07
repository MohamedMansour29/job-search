import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: String!
  }

  type Company {
    id: ID!
    name: String!
    description: String!
    industry: String!
    address: String!
    employeeCount: String!
    email: String!
  }

  type Message {
    id: ID!
    sender: User!
    receiver: User!
    content: String!
    timestamp: String!
    isRead: Boolean!
  }

  type Query {
    users: [User]
    companies: [Company]
    messages(sender: ID!, receiver: ID!): [Message]
  }

  type Mutation {
    sendMessage(sender: ID!, receiver: ID!, content: String!): Message
    markAsRead(messageId: ID!): Message
  }
`;

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    companies: async () => await Company.find(),
    messages: async (_, { sender, receiver }) => await Message.find({ sender, receiver }),
  },
  Mutation: {
    sendMessage: async (_, { sender, receiver, content }) => {
      const message = await Message.create({ sender, receiver, content });
      return message;
    },
    markAsRead: async (_, { messageId }) => {
      const message = await Message.findByIdAndUpdate(messageId, { isRead: true }, { new: true });
      return message;
    },
  },
};