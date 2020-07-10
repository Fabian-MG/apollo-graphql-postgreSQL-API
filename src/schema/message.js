import { gql } from "apollo-server-express";

export default gql`
  type Message {
    id: ID!
    text: String!
    user: User!
  }

  extend type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
    updateMessage(id: ID!, text: String!): Boolean!
  }

  extend type Query {
    messages: [Message!]!
    message(id: ID!): Message!
  }
`;
